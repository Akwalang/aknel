<?php

defined('LOCK') or die();

$router = array();

$router['autorization'] = array(
	'regexp' => '#^administrator->login->autorization$#i'
);

$router['check'] = array(
	'regexp' => '#^administrator->login->check$#i'
);

?>