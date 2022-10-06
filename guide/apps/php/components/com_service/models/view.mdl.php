<?php

defined('LOCK') or die();

$item = new Service($document -> page['item_id']);

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

$tpl -> item = $item;
$tpl -> color = $color;

$document -> loader = 'service';
$document -> title = $item -> head;

?>