<?php
defined("AKNEL_LOCK") or die();

if((empty($_GET["type"]) or !isset($_GET["type"])) and (empty($_POST["type"]) or !isset($_POST["type"]) and isset($_POST["ajax"]))){
	include_once(".".DS."components".DS."com_startpage".DS."startpage.php");
}
elseif(!isset($_POST["ajax"])){
	$component = clearData("type", "GET", "str");
	$selectedID = clearData("id", "GET", "int");
}
elseif(isset($_POST["ajax"])){
	$component = clearData("type", "POST", "str");
	$selectedID = clearData("id", "POST", "int");
}
include_once(".".DS."components".DS."com_".$component.DS.$component.".php");
?>