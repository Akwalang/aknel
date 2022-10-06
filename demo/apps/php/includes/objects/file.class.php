<?php
defined("AKNEL_LOCK") or die();

class File extends Commander {
	const ERROR = "Файл не найден.";
	private function __construct(){
	}
	private function __clone(){
	}
	static function includer($file){
		if(self::exist($file))
			include_once($file);
		else
			self::error($file);
			//Document::ERROR('404');
	}
	static function includerView($file){
		include_once(".".DS."view".DS.$file);
	}
	static function getText($file){
		if(self::exist($file))
			return file_get_contents($file);
		else
			self::error();
	}
	static function addToEnd($file, $string){
		if(self::exist($file))
			file_put_contents($file, "\n".$string, FILE_APPEND);
		else
			self::error();
	}
	static function clear($file){
		$descriptor = self::open($file, "rewrite");
		return ftruncate($descriptor, 0);
	}
	static function copy($file, $newFile){
		if (!copy($file, $newFile)) {
			return "Не удалось скопировать ".$file;
		}
	}
	static function newname($file, $newName){
		return rename($file, $newName);
	}
	static function move($file, $newName){
		return self::newname($file, $newName);
	}
	static function delete($file){
		if(self::exist($file))
			return unlink($file);
		else
			self::error();
	}
	static function error($file){
		if(Options::ERRORS){
			echo self::ERROR."<br />Файл: ".$file;
		}
		exit();
	}
}
?>