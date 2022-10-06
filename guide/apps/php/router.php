<?php

defined('LOCK') or die();

Core::GetTemplate();

Core::GetLanguage();

Core::LanguageAutoChange();

$page = Core::GetComponent();


if($page){
	$component = $page['component'];
	$file = '.'.DS.'components'.DS.'com_'.$component.DS.$component.'.php';
	if(file_exists($file))
		include $file;
	else
		$document -> error = 500;
}
else
	$document -> error = 404;


if($document -> error){
	$document -> page = array(
		'link_id' => 'error',
		'cat_id' => -1,
		'model' => 'view',
		'item_id' => 0,
		'component' => 'error',
		'model_file' => '.\components\com_error\models\view.mdl.php'
	);
	
	$file = '.'.DS.'components'.DS.'com_error'.DS.'error.php';
	include $file;
}

?>