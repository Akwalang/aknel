<?php

class Core {
	
	static public function ChunkPaths(){
		if(strpos(urldecode($_SERVER['REQUEST_URI']), '-//-') !== false){
			list($frontend, $backend) = explode('-//-', urldecode($_SERVER['REQUEST_URI']));
			define('FULL_FRONTEND_PATH', $frontend);
			define('BACKEND_PATH', $backend);
		}
		else{
			define('FULL_FRONTEND_PATH', urldecode($_SERVER['REQUEST_URI']));
			define('BACKEND_PATH', '');
		}
	}
	
	static public function GetUserLanguage(){
		$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
		$reg = "#^([a-z]+)#i";
		preg_match($reg, $lang, $matches);
		return strtolower($matches[1]);
	}
	
	static public function GetLanguage(){
		$index = strpos(FULL_FRONTEND_PATH, '/', 1);
		$lang = array();
		
		if($index !== false){
			$first_path = substr(FULL_FRONTEND_PATH, 1, $index - 1);
			$query = "SELECT id, name, prefix, `default`
					  FROM	 ##_sys_language
					  WHERE	 side = 0 AND prefix = ? AND `default` = 0";
			$params = array($first_path);
			$lang = SQL::FetchRow($query, $params);
		}
		
		if(!$lang){
			$query = "SELECT id, name, prefix, browser_lang, `default`
					  FROM	 ##_sys_language
					  WHERE	 side = 0 AND `default` = 1";
			$lang = SQL::FetchRow($query);
			
			define('FRONTEND_PATH', FULL_FRONTEND_PATH);
		}
		else
			define('FRONTEND_PATH', substr(FULL_FRONTEND_PATH, $index));
		define('LINK_LANG', $lang['default'] ? '' : '/'.$lang['prefix']);
		
		return Document::GetInstance() -> lang = $lang;
	}
	
	static public function LanguageAutoChange(){
		if(!isset($_COOKIE['sinchronized']) or !$_COOKIE['sinchronized']){
			setcookie('sinchronized', true, time() + 60 * 60 * 24 * 30);
			$userLang = self::GetUserLanguage();
			$docLang = Document::GetInstance() -> lang;
			if($userLang != $docLang['browser_lang']){
				$query = "SELECT prefix
						  FROM	 ##_sys_language
						  WHERE	 side = 0 and browser_lang = ?";
				$params = array($userLang);
				$prefix = SQL::FetchOne($query, $params);
				$url = ROOT.'/';
				if($prefix)
					$url .= $prefix;
				$url .= FRONTEND_PATH;
				self::Redirect($url);
			}
		}
	}
	
	static public function GetComponent(){
		$document = Document::GetInstance();
		$info = pathinfo(FRONTEND_PATH);
		if(
			(isset($info['extension']) and $info['extension'] != Options::PAGE_EXTENSION)
			or (!isset($info['extension']) and $info['dirname'] != DS)
		)
			return $document -> page = array();
		
		$params = array($document -> lang['id']);
		$query = "SELECT l.id as link_id, l.cat_id,
						 lc.model, lc.item_id,
						 c.name as component_name, c.aliace as component
				  FROM   ##_sys_link l
				  LEFT JOIN ##_sys_link_connection lc
					   ON   lc.link_id = l.id
				  LEFT JOIN ##_component c
					   ON   lc.component_id = c.id
				  WHERE  l.enable = 1 AND ".
						 (FRONTEND_PATH == '/' ? "l.start = 1" : "l.cache = ? AND l.start = 0")
				  		." AND lc.language_id = ? AND lc.link_id = l.id
				  LIMIT  1";
//		Core::Pre(FRONTEND_PATH, 1);
		if(FRONTEND_PATH != '/')
			array_unshift($params, $info['dirname'].'/'.$info['filename']);
		
		$document -> page = SQL::FetchRow($query, $params);
		
		if(!$document -> page and FRONTEND_PATH == '/'){ // Винмание! Костыль!!!
			$document -> page = array(
				'link_id' => 0,
				'cat_id' => 0,
				'model' => 'view',
				'item_id' => 0,
				'component' => 'start'
			);
		}
		
		if($document -> page)
			$document -> page['model_file']= '.'.DS.'components'.DS.'com_'.$document -> page['component'].DS.'models'.DS.$document -> page['model'].'.mdl.php';
		
		return $document -> page;
	}
	
	static public function GetTemplate(){
		$document = Document::GetInstance();
				
		$document -> template = SQL::FetchRow("SELECT id, directory FROM ##_sys_template WHERE enable = 1");
	}
	
	static public function Pre($data, $die = false){
		echo '<pre>';
		print_r($data);
		echo '</pre>';
		if($die)
			die();
	}
	
	static public function Dump($data, $die = false){
		echo '<pre>';
		var_dump($data);
		echo '</pre>';
		if($die)
			die();
	}
	
	static public function Redirect($url){
		header('Location: '.$url);
		exit;
	}
}

?>