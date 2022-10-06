<?php

class Article extends Base {
	const TABLE = '##_com_article';
	
	public $id;
	public $title;
	public $text;
	public $date;
	
	public function __construct($id = false, $field = 'id'){
		if($id !== false){
			$this -> $field = $id;
			
			$query = "SELECT id, title, text, date
					  FROM	 ".self::TABLE."
					  WHERE	 ".$field." = ?";
			$params = $this -> GetParams($field);
			
			$result = SQL::FetchRow($query, $params);
			
			$this -> StuffOf($result);
		}
	}
	
	public function Update(){
		$query = "UPDATE ".self::TABLE."
				  SET	 title = :title,
				  		 text = :text,
				  WHERE	 id = :id";
		$params = $this -> GetMarkedParams('id', 'title', 'text');
		
		return SQL::Query($query, $params);
	}
	
	public function Insert(){
		$query = "INSERT INTO ".self::TABLE."(title, text)
						 VALUES (:title, :text)";
		$params = $this -> GetMarkedParams('title', 'text');
		
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