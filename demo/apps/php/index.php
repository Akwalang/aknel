<?php
define("AKNEL_LOCK", 1);
define("DS", DIRECTORY_SEPARATOR);

include_once("options.php");
include_once(".".DS."includes".DS."functions".DS."functions.php");

function __autoload($className){
	$className = strtolower($className);
	include_once(".".DS."includes".DS."objects".DS.$className.".class.php");
}

include_once(".".DS."define_template.php");

include_once(".".DS."router.php");

include_once(".".DS."display.php");

?>