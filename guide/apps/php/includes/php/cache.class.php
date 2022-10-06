<?php

class Cache {
	/*
	function Get($id, $postfix){
		if(file_exists('.'.DS.'store_'.Options::KEY.DS.'cache'.DS.(int)$id.'.'.$postfix.'.cache.php') and Options::CACHE){
			include('.'.DS.'store_'.Options::KEY.DS.'cache'.DS.(int)$id.'.'.$postfix.'.cache.php');
			return $cache;
		}
		return false;
	}
	function Save($id, $postfix, $data){
		if(Options::CACHE){
			$php = '<?php '."\n\r".'$cache = array();';
			
			foreach($data as $key => $value)
				$php .= "\n\r".'$cache["'.$key.'"] = "'.addslashes($value).'";';
				
			$php .= "\n\r"." ?>";
			$file = fopen(".".DS."store_".Options::KEY.DS."cache".DS.(int)$id.".".$postfix.".cache.php", 'w');
			fwrite($file, $php);
		}
	}
	*/
	function Get($url){
		$url = '.'.DS.'store_'.Options::KEY.DS.'cache'.DS.str_replace(DS, '~', $url).'.cache.php';
		if(file_exists($url)){
			global $document;
			$file = file_get_contents($url);
			$document = unserialize($url);
			return true;
		}
		return false;
	}
	function Set($url){
		global $document;
		$file = fopen(".".DS."store_".Options::KEY.DS."cache".DS.(int)$id.".".$postfix.".cache.php", 'w');
		if(fwrite($file, serialize($document)))
			return true;
		return false;
	}
}

?>