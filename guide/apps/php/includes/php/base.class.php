<?php

class Base {
	public $inDB = false;
	
	public function StuffOf($array){
		if($array){
			$this -> inDB = true;
			foreach($array as $field => $value)
				$this -> $field = $value;
		}
	}
	
	public function GetParams(){
		$args = func_get_args();
		
		$return = array();
		foreach($args as $name)
			array_push($return, $this -> $name);
			
		return $return;
	}
	public function GetMarkedParams(){
		$args = func_get_args();
		
		$return = array();
		foreach($args as $name)
			$return[':'.$name] = $this -> $name;
			
		return $return;
	}
}

?>