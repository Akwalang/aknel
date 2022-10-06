<?php
defined("AKNEL_LOCK") or die();

$contentHead = "<h1>".Document::Title("return")."</h1>";
$contentAuthor = "Автор <b>".Document::Author("return")."</b>";
$contentDateCreate = "Дата создания <i>".Document::DateCreate("return")."</i>";
$contentDateChange = "Дата редактирования <i>".Document::DateChange("return")."</i>";
$content = Document::returnOther("text");

$HTML = $contentHead
/*
		."<div class=\"content_info\">"
			.$contentAuthor."<br />"
			.$contentDateCreate."<br />"
			.$contentDateChange
		."</div>"
*/
		."<div class=\"content_text\">"
			.$content
		."</div>";

Document::set("content", $HTML);
?>