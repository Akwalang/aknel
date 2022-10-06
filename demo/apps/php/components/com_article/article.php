<?php
defined("AKNEL_LOCK") or die();

$article = SQL::getInstance() -> fetchAlone("SELECT title,
										 sys_name,
										 text,
										 author, 
										 date_create, 
										 date_change, 
										 keywords, 
										 description FROM ak_article WHERE id='{$selectedID}'");
										 
include_once(".".DS."components".DS."com_{$component}".DS."document.construct.php");
?>