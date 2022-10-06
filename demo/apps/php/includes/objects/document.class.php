<?php
defined("AKNEL_LOCK") or die();

class Document {
	static private $_title;
	static private $_sysName;
	static private $_content;
	static private $_author;
	static private $_dateCreate;
	static private $_dateChange;
	static private $_metaKeywords;
	static private $_metaDescription;
	static private $_other = array();
	
	static private $module = array();
	
	static public function set($name, $value, $isOther = false){
		if($isOther){
			self::$_other[$name] = $value;
		}
		else{
			switch($name){
				case "title":
					self::$_title = $value;
					break;
				case "sysName":
					self::$_sysName = $value;
					break;
				case "content":
					self::$_content = $value;
					break;
				case "author":
					self::$_author = $value;
					break;
				case "date_create":
					self::$_dateCreate = $value;
					break;
				case "date_change":
					self::$_dateChange = $value;
					break;
				case "keywords":
					self::$_metaKeywords = $value;
					break;
				case "description":
					self::$_metaDescription = $value;
					break;
			}
		}
	}
	static public function Title($return = ""){
		if($return == "return")
			return self::$_title;
		else
			echo self::$_title;
	}
	static public function SysName($return = ""){
		if($return == "return")
			return self::$_sysName;
		else
			echo self::$_sysName;
	}
	static public function Content($return = ""){
		if($return == "return")
			return self::$_content;
		else
			echo self::$_content;
	}
	static public function Author($return = ""){
		if($return == "return")
			return self::$_author;
		else
			echo self::$_author;
	}
	static public function DateCreate($return = ""){
		if($return == "return")
			return self::$_dateCreate;
		else
			echo self::$_dateCreate;
	}
	static public function DateChange($return = ""){
		if($return == "return")
			return self::$_dateChange;
		else
			echo self::$_dateChange;
	}
	static public function Keywords($return = ""){
		if($return == "return")
			return self::$_metaKeywords;
		else
			echo self::$_metaKeywords;
	}
	static public function Description($return = ""){
		if($return == "return")
			return self::$_metaDescription;
		else
			echo self::$_metaDescription;
	}
	static public function returnOther($name){
		return self::$_other[$name];
	}
	
	static public function Module($position, $style){
		self::$module[$position] = SQL::getInstance() -> fetch("SELECT id, name, sys_name, type FROM ak_module WHERE insert_position='{$position}' ORDER BY position");
		foreach(self::$module[$position] as $mod){
			include(".".DS."modules".DS."mod_".$mod["type"].DS.$mod["type"].".php");
		}
	}
}
?>