<?php

class Categories {
	const TABLE = '##_mod_categories';
	const TABLE_TEXT = '##_mod_categories_text';
	const TABLE_LINK = '##_sys_link';
	
	static public function GetItems(){
		$query = "SELECT	c.color, c.shadow, c.image, c.video,
							t.name, t.description,
							l.cache as link, l.cat_id as category
				  FROM		".self::TABLE." c
				  LEFT JOIN ".self::TABLE_TEXT." t
				  	   ON	t.category_id = c.id
				  LEFT JOIN ".self::TABLE_LINK." l
				  	   ON	c.link_id = l.id
				  WHERE		t.language_id = ?
				  ORDER BY	c.`order` ASC";
		
		$params = array(Document::GetInstance() -> lang['id']);
		
		return SQL::FetchAll($query, $params);
	}
}

?>