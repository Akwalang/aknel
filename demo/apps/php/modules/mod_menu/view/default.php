<?php
defined("AKNEL_LOCK") or die();

$linkList = "<ul class=\"{$mod['sys_name']}\">";
foreach($allLinks as $link){
	if(@strpos($link['link'], $_SERVER['QUERY_STRING']))
		$addClass = ' active_menu';
	else
		$addClass = ' none';
	$linkList .= "<li class=\"item{$link['id']}{$addClass}\">"
					."<a href=\"{$link['link']}\">"
						."<span>"
							.$link['name']
						."</span>"
					."</a>"
					."<div class=\"color_block\">"
					."</div>"
				."</li>";
}
$linkList .= "</ul>";

echo $linkList;
?>
