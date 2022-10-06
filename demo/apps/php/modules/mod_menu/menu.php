<?php
defined("AKNEL_LOCK") or die();

$allLinks = SQL::getInstance() -> fetch("SELECT id, name, link FROM ak_module_menu WHERE module_id='{$mod['id']}' ORDER BY position");

include(".".DS."modules".DS."mod_".$mod["type"].DS."view".DS."default.php");
?>