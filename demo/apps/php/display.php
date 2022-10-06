<?php
defined("AKNEL_LOCK") or die();

if(!isset($_POST['ajax'])){	
	include(".".DS."templates".DS.$template['directory'].DS.$template['file'].".php");
}
elseif($_POST['ajax'] == "xml"){
	include(".".DS."includes".DS."ajax".DS."xml.php");
}
elseif($_POST['ajax'] == "json"){
	include(".".DS."includes".DS."ajax".DS."json.php");
}
?>