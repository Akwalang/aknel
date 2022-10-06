<?php

defined('LOCK') or die();

$tpl = &$document -> content;

include $document -> page['model_file'];

$document -> GetContent();

?>