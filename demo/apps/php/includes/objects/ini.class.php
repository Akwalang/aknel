<?php
defined("AKNEL_LOCK") or die();

class INI extends Commander {
	const ERROR = "Ошибка при работе с ini файлом.";
	private function __construct($file){
	}
	private function __clone(){
	}
	static function parse($file){
		return parse_ini_file($file);
	}
	static function getParams($file){
		if(self::exist($file))
			return self::parse($file);
	}
	static function updateParam($file, $name, $value = "none"){
		if(self::exist($file)){
			$array = self::getParams($file);
			if($value == "none" and is_array($name)){
				foreach($name as $key => $value){
					$array[$key] = $value;
				}
			}
			elseif($value != "none" and !is_array($name)){
				$array[$name] = $value;
			}
			else{
				self::error();
			}
			return self::saveParams($file, $array);
		}
		else
			self::error();
	}
	static function addParam($file, $name, $value){
		if(self::exist($file)){
			$array = self::getParams($file);
			if(isset($name) and $name != ""){
				if(!isset($array[$name]))
					return file_put_contents($file, $name."=".$value."\n", FILE_APPEND);
				else
					self::error();
			}
			else
				self::error();
		}
		else
			self::error();
	}
	static function saveParams($file, $array){
		$newINI = "";
		foreach($array as $name => $value){
			$newINI .= $name."=".$value."\n";
		}
		return file_put_contents($file, $newINI);
	}
}
?>