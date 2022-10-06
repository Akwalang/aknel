<?php

class Languages {
	const TABLE = '##_sys_language';
	
	static public function GetItems(){
		$query = "SELECT id, name, prefix, side, `default`
				  FROM	 ".self::TABLE."
				  WHERE  side = 0";
		return SQL::FetchAll($query);
	}
	
}

?>