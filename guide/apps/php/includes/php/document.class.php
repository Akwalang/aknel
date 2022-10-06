<?php

class Document {
	
	static private $instance;
	
	private function __construct(){
		$this -> scripts = array();
		$this -> styles = array();
		$this -> content = new TPL;
	}
	static public function GetInstance(){
		if(!self::$instance)
			self::$instance = new Document;
		return self::$instance;
	}
	
		
	public function ChangeTPL($name){
		$this -> tpl = $name;
	}
	public function GetContent(){
		$tpl = &$this -> content;
		$tpl -> path = '.'.DS.'templates'.DS.$this -> template['directory'].DS.'html'.DS;
		$tpl -> GetLanguage($this -> page['component'], 'component');
		$this -> content = $tpl -> Get($this -> page['component'].'_'.$this -> page['model'], 'component');
	}
	
	public function AddScript($file, $append = true){
		if(strpos($file, 'http://') === false)
			$file = ROOT.$file;
		
		if(!in_array($file, $this -> scripts))
			if($append)
				array_push($this -> scripts, $file);
			else
				array_unshift($this -> scripts, $file);
	}
	
	public function AddStyle($file){
		if(strpos($file, 'http://') === false)
			$file = ROOT.$file;	
		
		if(!in_array($file, $this -> styles))
			$this -> styles[] = $file;
	}
	
	public function Template(){
		echo ROOT.'/templates/'.$this -> template['directory'].'/';
	}
	public function Loader(){
		echo $this -> loader;
	}
	public function Content(){
		echo $this -> content;
	}
	public function Module($position, $style){
		$document = self::$instance;
		
		$query = "SELECT	m.id,
							mn.name,
							mt.aliace as type
				  FROM		##_module m
				  LEFT JOIN	##_module_position mp
				  	   ON	mp.module_id = m.id
				  LEFT JOIN	##_module_name mn
				  	   ON	mn.module_id = m.id
				  LEFT JOIN	##_module_type mt
				  	   ON	m.type_id = mt.id
				  WHERE		m.enable = 1
				  			AND mn.language_id = ?
				  			AND mp.position = ?
							AND (mp.categories LIKE ? OR mp.categories LIKE ?)
				  ORDER BY	m.order ASC";
		$params = array($document -> lang['id'], $position, '%|0|%', "%|".$document -> page['cat_id']."|%");
		
		$modules = SQL::FetchAll($query, $params);
		
		echo '<marker class="'.$position.'"></marker>';
		
		foreach($modules as $index => $item){
			$dir = '.'.DS.'modules'.DS.'mod_'.$item['type'];
			
			$handler = $dir.DS.$item['type'].'.class.php';
			if(file_exists($handler))
				include_once $handler;
			
			$file = $dir.DS.$item['type'].'.php';
			if(file_exists($file))
					include $file;
		}	
	}
	public function ModuleById($id){
		$document = self::$instance;
		
		$query = "SELECT	m.id,
							mp.position,
							mn.name,
							mt.aliace as type
				  FROM		##_module m
				  LEFT JOIN	##_module_position mp
				  	   ON	mp.module_id = m.id
				  LEFT JOIN	##_module_name mn
				  	   ON	mn.module_id = m.id
				  LEFT JOIN	##_module_type mt
				  	   ON	m.type_id = mt.id
				  WHERE		m.id = ?";
		$params = array($id);

		$item = SQL::FetchRow($query, $params);
		
		$style = $item['position'];
		
		$dir = '.'.DS.'modules'.DS.'mod_'.$item['type'];
		
		$handler = $dir.DS.$item['type'].'.class.php';
		if(file_exists($handler))
			include_once $handler;
		
		$file = $dir.DS.$item['type'].'.php';
		if(file_exists($file))
			include $file;
		
		return $module -> content;
	}
	public function Adminka(){
		echo $this -> admin_content;
	}
	public function Head(){
		$html = '';
		$html .= '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'."\n";
		$html .= '<title>'.$this -> title.'</title>'."\n";
		$html .= '<link href="'.ROOT.'/templates/'.$this -> template['directory'].'/'.$this -> favicon.'.ico" rel="icon" type="image/x-icon" />'."\n";
		
		foreach($this -> scripts as $file)
			$html .= '<script src="'.$file.'" type="text/javascript" charset="utf8"></script>'."\n";
			
		foreach($this -> styles as $file)
			$html .= '<link href="'.$file.'" type="text/css" rel="stylesheet" charset="utf8"></script>'."\n";
		
		echo $html;
	}
}

?>