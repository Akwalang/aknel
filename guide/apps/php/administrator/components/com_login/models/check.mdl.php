<?php

defined('LOCK') or die();

if(isset($_SESSION['user']) && $_SESSION['user']['type'] == 'superadmin')
	Core::Redirect(ROOT.FRONTEND_PATH.'-//-administrator-%3Epanel');
else{
	$document -> status = 0;
	if($_SERVER['REQUEST_METHOD'] == 'POST')
		$document -> admin_content = TPL::Get('com_autorization');
	$document -> AddScript('/administrator/components/com_login/js/login.js');
	$document -> AddStyle('/administrator/templates/sunshine/css/com_autorization.css');
}

?>