<?php

defined('LOCK') or die();

switch($document -> page['cat_id']){
	case 1:
		$color = 'violet';
		break;
	case 2:
		$color = 'blue';
		break;
	case 3:
		$color = 'green';
		break;
}

$module -> color = $color;

?>