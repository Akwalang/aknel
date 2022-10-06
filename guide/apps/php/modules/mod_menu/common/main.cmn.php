<?php

defined('LOCK') or die();

$module -> map = Menu::CreateMap($module -> items);

$module -> active = Menu::MapActiveItems($module -> items);

$module -> active_id = Document::GetInstance() -> page['link_id'];

?>