<?php

defined('LOCK') or die();

$module = new TPL;

$module -> path = '.'.DS.'templates'.DS.$this -> template['directory'].DS.'html'.DS;

$module -> title = $item['name'];
$module -> items = Languages::GetItems();
$module -> active = $document -> lang['id'];


$common = $dir.DS.'common'.DS.$style.'.cmm.php';
if(file_exists($common))
	include $common;


$module -> Get('languages_'.$style, 'module');

if(!isset($_POST['ajax']))
	$module -> Show();

?>