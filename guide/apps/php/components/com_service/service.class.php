<?php

class Service extends Base {
	const TABLE = '##_com_service';
	
	public $id;
	public $head;
	public $text;
	public $icon;
	public $date;
	
	public function __construct($id = false, $field = 'id'){
		if($id !== false){
			$this -> $field = $id;
			
			$query = "SELECT id, head, text, icon, date
					  FROM ".self::TABLE."
					  WHERE ".$field." = ?";
			$params = $this -> GetParams($field);
			
			$result = SQL::FetchRow($query, $params);
			
			$this -> StuffOf($result);
		}
	}
	
	public function Update(){
		$query = "UPDATE ".self::TABLE."
				  SET	 head = :head,
				  		 text = :text,
						 icon = :icon
				  WHERE	 id = :id";
		$params = $this -> GetMarkedParams('id', 'head', 'text', 'icon');
		
		return SQL::Query($query, $params);
	}
	
	public function Insert(){
		$query = "INSERT INTO ".self::TABLE."(head, text, icon)
						 VALUES (:head, :text, :icon)";
		$params = $this -> GetMarkedParams('head', 'text', 'icon');
		
		$return = SQL::Query($query, $params);
		
		if($return)
			$this -> id = SQL::InsertId();
		
		return $return;
	}
	
	public function Delete(){
		$query = "DELETE FROM ".self::TABLE." WHERE id = ?";
		$params = $this -> GetParams('id');
		
		$return = SQL::Query($query, $params);
		
		if($return)
			$this -> inDB = false;
		
		return $return;
	}

}

?>