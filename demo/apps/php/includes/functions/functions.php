<?php
defined("AKNEL_LOCK") or die();

function clearData($name, $method, $type){
	if($method == "GET")
		$data = $_GET[$name];
	if($method == "POST")
		$data = $_POST[$name];
		
	if($type == "int" or $type == "integer")
		return (int)($data);
	if($type == "str" or $type == "string"){
		$data = strtolower($data);
		if(strpos($data, " ") == ""){
			return trim($data);
		}
		else{
			Document::ERROR('404');
		}
	}
	if($type == "msg" or $type == "message"){
		return trim(strip_tags($data));
	}
}
function GET_DIR($file){
	return dirname($file);
}
?>