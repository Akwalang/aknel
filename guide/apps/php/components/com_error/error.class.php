<?php

class Error extends Base {
	const TABLE = '##_com_error';
	
	public function __construct($id = false, $field = 'id'){
		if($id !== false){
			$this -> $field = $id;
			
			$query = "SELECT id, language_id, code, title, text
					  FROM   ".self::TABLE."
					  WHERE  ".$field." = ?";
			$params = $this -> GetParams($field);
			
			$result = SQL::FetchRow($query, $params);
			
			$this -> StuffOf($result);
		}
	}
	
}

?>