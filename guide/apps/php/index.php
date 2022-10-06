<?php

define('LOCK', true);
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', 'http://'.$_SERVER['HTTP_HOST']);

function __autoload($name){
	$name = strtolower($name);
	$file = '.'.DS.'includes'.DS.'php'.DS.$name.'.class.php';
	if(file_exists($file))
		include $file;
	else{
		$file = '.'.DS.'components'.DS.'com_'.$name.DS.$name.'.class.php';
		if(file_exists($file))
			include $file;
	}
}

session_start();

include('.'.DS.'options.php');

Timer::Start();

Core::ChunkPaths();

$document = Document::GetInstance();

include('.'.DS.'router.php');

if($backend)
	include('.'.DS.'administrator'.DS.'index.php');

Display::Show();

Timer::End();

?>