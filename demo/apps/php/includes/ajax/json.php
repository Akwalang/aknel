<?php
defined("AKNEL_LOCK") or die();

$jsonArray = array();
$jsonArray['favicon'] = '.'.DS.'templates'.DS.$template['directory'].DS.$template['favicon'].'.ico';
$jsonArray['title'] = Document::Title("return");
$jsonArray['content'] = Document::Content("return");

header("Content-Type: application/json; charset=utf-8");
echo json_encode($jsonArray);
?>