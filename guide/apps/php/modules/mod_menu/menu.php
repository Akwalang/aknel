<?php

defined('LOCK') or die();

$module = new TPL;

$module -> path = '.'.DS.'templates'.DS.$document -> template['directory'].DS.'html'.DS;

$module -> index = $index + 1;
$module -> title = $item['name'];
$module -> items = Menu::GetItems($item['id']);
$module -> active = $document -> page['link_id'];


$common = $dir.DS.'common'.DS.$style.'.cmn.php';
if(file_exists($common))
	include $common;


$module -> Get('menu_'.$style, 'module');

if(!isset($_POST['ajax']))
	$module -> Show();

?>