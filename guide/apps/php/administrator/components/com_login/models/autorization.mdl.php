<?php

defined('LOCK') or die();

if(isset($_POST['password']) && isset($_POST['login'])){
	$user = SQL::getInstance() -> fetchAlone("SELECT `login`, `password`, `type` FROM ##_users WHERE `login` = '{$_POST['login']}'");
	
	if($user['password'] == md5($_POST['password'])){
		$document -> status = 1;
		$_SESSION['user']['type'] = $user['type'];
		$_SESSION['user']['login'] = $user['login'];
		$document -> admin_content = TPL::Get('com_panel');
		$document -> AddStyle('/administrator/templates/sunshine/css/com_panel.css');
	}
	else
		$document -> status = 0;
}
else
	$document -> status = 0;

?>