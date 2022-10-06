<?php
defined("AKNEL_LOCK") or die();

$startPage = SQL::getInstance() -> fetchAlone("SELECT component, id FROM ak_start");
$component = $startPage["component"];
$selectedID = $startPage["id"];
?>