<?php

defined('LOCK') or die();

include('.'.DS.'administrator'.DS.'components'.DS.'com_'.$admin -> component.DS.'handler.php');

include('.'.DS.'administrator'.DS.'components'.DS.'com_'.$admin -> component.DS.'models'.DS.$admin -> model.'.mdl.php');

$document -> AddScript('/administrator/components/com_content/js/content.js');
$document -> AddStyle('/administrator/templates/sunshine/css/com_admin_content.css');

?>