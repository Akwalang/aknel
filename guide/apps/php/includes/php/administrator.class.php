<?php

class Administrator {
	private $data = array();
	
	function __construct($path){
		$this -> path = $path;
		self::GetComponent();
		if($this -> component != 'login' and (!isset($_SESSION['user']) or $_SESSION['user']['type'] != 'superadmin'))
			die;
		self::GetModel();
	}
	
	function Pre($die = 0){
		Core::Pre($this, $die);
	}
	
	function GetModel(){
		include('.'.DS.'administrator'.DS.'components'.DS.'com_'.$this -> component.DS.'router.php');
		
		foreach($router as $model => $sets)
			if(preg_match($sets['regexp'], $this -> path)){
				$this -> model = $model;
				break;
			}
	}
	
	function GetComponent(){
		$expl = explode('->', $this -> path);
		$this -> component = $expl[1];
	}
	
}

?>