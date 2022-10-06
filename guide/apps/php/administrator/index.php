<?php

defined('LOCK') or die();

TPL::SetPath('.'.DS.'administrator'.DS.'templates'.DS.'sunshine'.DS.'tpl'.DS);

$document -> AddStyle('/administrator/templates/sunshine/css/manager.css');

if($backend == 'administrator')
	$backend = 'administrator->login->check';
	
$admin = new Administrator($backend);

include('.'.DS.'administrator'.DS.'router.php');

?>