<?php
defined("AKNEL_LOCK") or die();

class XML extends Commander {
	const ERROR = "Ошибка при работе с xml файлом.";
	private function __construct(){
	}
	private function __clone(){
	}
	static function getXML($file){
		return simplexml_load_file($file);
	}
	static function readTree($array, &$tree){
		$tree .= "&lt;".$key."&gt;";
		foreach($array as $key => $value){
			if(is_array($array[$key]))
				self::readTree($array[$key], &$tree);
			else
				$tree .= "&lt;".$key."&gt;".$value."&lt;/".$key."&gt;";
		}
		$tree .= "&lt;/".$key."&gt;";
	}
	static function showXML($file){
		$xml = self::getXML($file);
		$tree = "";
		self::readTree($xml, $tree);
		return $tree;
	}
}
?>