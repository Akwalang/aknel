<?php

defined('LOCK') or die();

$module = new TPL;

$module -> path = '.'.DS.'templates'.DS.$this -> template['directory'].DS.'html'.DS;

$module -> items = Categories::GetItems();


$common = $dir.DS.'common'.DS.$style.'.cmn.php';
if(file_exists($common))
	include $common;


$module -> Get('categories_'.$style, 'module');

if(!isset($_POST['ajax']))
	$module -> Show();

?>