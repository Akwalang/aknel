<?php
defined("AKNEL_LOCK") or die();

Document::set("title", $article["title"]);
Document::set("sys_name", $article["sys_name"]);
Document::set("author", $article["author"]);
Document::set("date_create", $article["date_create"]);
Document::set("date_change", $article["date_change"]);
Document::set("keywords", $article["keywords"]);
Document::set("description", $article["description"]);

Document::set("text", $article["text"], true);

include_once(".".DS."components".DS."com_{$component}".DS."view".DS."default.php");
?>