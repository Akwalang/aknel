<?php

defined('LOCK') or die();

$document -> status = 1;
$document -> admin_content = TPL::Get('com_panel');
$document -> AddScript('/administrator/components/com_panel/js/panel.js');
$document -> AddStyle('/administrator/templates/sunshine/css/com_panel.css');

?>