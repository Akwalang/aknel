<?php
defined("AKNEL_LOCK") or die();

if(!empty($_SERVER['QUERY_STRING']) and $_SERVER['REQUEST_METHOD'] == 'GET')
	$pageLink = SQL::getInstance() -> fetchOnce("SELECT id FROM ak_module_menu WHERE link LIKE '%{$_SERVER['QUERY_STRING']}'");
elseif($_SERVER['REQUEST_METHOD'] == 'POST'){
	$queryString = 'type='.$_POST['type'].'&id='.$_POST['id'];
	$pageLink = SQL::getInstance() -> fetchOnce("SELECT id FROM ak_module_menu WHERE link LIKE '%{$queryString}'");
}
else
	$pageLink = 0;
	
$template = SQL::getInstance() -> fetchAlone("SELECT id, directory FROM ak_templates WHERE stat='1'");

$template['file'] = SQL::getInstance() -> fetchOnce("SELECT file FROM ak_templates_files WHERE links LIKE '%|{$pageLink}|%' AND template_id='{$template['id']}'");
	
if(empty($template['file'])){
	$template['file'] = SQL::getInstance() -> fetchOnce("SELECT file FROM ak_templates_files WHERE links LIKE '%|-1|%' AND template_id='{$template['id']}'");
}

$template['favicon'] = SQL::getInstance() -> fetchOnce("SELECT file FROM ak_favicons WHERE links LIKE '%|{$pageLink}|%' AND template_id='{$template['id']}'");

if(empty($template['favicon'])){
	$template['favicon'] = SQL::getInstance() -> fetchOnce("SELECT file FROM ak_favicons WHERE links LIKE '%|-1|%' AND template_id='{$template['id']}'");
}
?>