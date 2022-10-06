<?php

class Menu {
	const TABLE = '##_mod_menu_link';
	const TABLE_LINK = '##_sys_link';
	
	static public function GetItems($module_id){
		$query = 'SELECT    m.id, m.parent_id, m.link_id, m.name, m.order,
							l.cache as link
				  FROM		'.self::TABLE.' m
				  LEFT JOIN	'.self::TABLE_LINK.' l
				  	   ON	l.id = m.link_id
				  WHERE		m.module_id = ? AND m.language_id = ?
				  ORDER BY	m.parent_id ASC, m.order ASC';
		
		$params = array($module_id, Document::GetInstance() -> lang['id']);
		
		return SQL::FetchAll($query, $params);
	}
	
	static public function CreateMap($items){
		$map = array();
		$links = array('root' => &$map);
		$indexes = array(0 => 'root');	
		
		self::CreateMapCommon($links, $items, $indexes);
		
		return $map;
	}
	
	static protected function CreateMapCommon(&$links, &$items, &$indexes){
		foreach($items as $key => $item){
			if(isset($indexes[$item['parent_id']])){
				$indexes[$item['id']] = $key;
				$links[$indexes[$item['parent_id']]][$key] = array();
				$links[$key] = &$links[$indexes[$item['parent_id']]][$key];
				unset($items[$key]);
			}
		}
		if($items)
			self::CreateMapCommon($links, $items, $indexes);
	}
	
	static public function MapActiveItems($items){
		$result = array();
		$activeLink = Document::GetInstance() -> page['link_id'];
		
		foreach($items as $item)
			if($item['link_id'] == $activeLink){
				array_push($result, $item['id']);
				$parent = $item['parent_id'];
				while($parent){
					foreach($items as $item){
						if($item['id'] == $parent){
							array_push($result, $item['id']);
							$parent = $item['parent_id'];
						}
					}
				}
			}
		
		return $result;
	}
}

?>