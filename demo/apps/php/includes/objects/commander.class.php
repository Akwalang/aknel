<?php
defined("AKNEL_LOCK") or die();

class Commander {
	static function open($file, $mode){
		switch($mode){
			case "read":
				$descriptor = fopen($file, "r");
				break;
			case "prepend":
				$descriptor = fopen($file, "r+");
				break;
			case "rewrite":
				$descriptor = fopen($file, "w+");
				break;
			case "append":
				$descriptor = fopen($file, "a+");
				break;
		}
		if($descriptor)
			return $descriptor;
		else
			self::error();
	}
	static function exist($file){
		return file_exists($file);
	}
	static function numRow($file){
		if(self::exist($file))
			return count(file($file));
		else
			self::error();
	}
	static function getSize($file){
		if(self::exist($file))
			return filesize($file);
		else
			self::error();
	}
	static function error(){
		if(Options::ERRORS){
			echo self::ERROR;
		}
		exit();
	}
}
?>