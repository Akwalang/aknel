<?php

defined('LOCK') or die();


$query = "SELECT id, id_parent, name, aliace
		  FROM ##_categories
		  ORDER BY id_parent";

$categories = SQL::getInstance() -> fetch($query);

$query = "SELECT id, id_com, id_mat, aliace, id_cat, enable, start, link, cache
		  FROM ##_links";

$pages = SQL::getInstance() -> fetch($query);

TPL::assign('tree', ContentHandler::FormDataTree($categories, $pages));

TPL::assign('categories', $categories);

TPL::assign('pages', $pages);

$document -> admin_content = TPL::Get('com_content_tree');

?>