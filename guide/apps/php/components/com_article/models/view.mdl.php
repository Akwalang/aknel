<?php

defined('LOCK') or die();

$article = new Article($document -> page['item_id']);

$article -> text = "<p>".str_replace("\n", "</p><p>", $article -> text)."</p>";

$tpl -> item = $article;

$document -> loader = 'article';
$document -> title = $article -> title;

?>