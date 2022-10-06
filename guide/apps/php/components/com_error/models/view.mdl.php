<?php

defined('LOCK') or die();

$error = new Error($document -> error, 'code');

$error -> text = "<p>".str_replace("\n", "</p><p>", $error -> text)."</p>";

$tpl -> item = $error;

$document -> loader = 'error';
$document -> title = $error -> title;

	switch($document -> error){
		case 404:
			header('HTTP/1.0 404 NotFound');
			break;
		case 500:
			header('HTTP/1.0 500 Internal Server Error');
			break;
	}

?>