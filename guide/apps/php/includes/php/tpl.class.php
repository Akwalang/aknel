<?php

class TPL {
	private $inner_data_space = array();
	
	public $content;
	public $path;

	public function __construct(){
	}
		
	public function __set($name, $value){
		$this -> inner_data_space[$name] = $value;
	}
	
	public function __get($name){
		return $this -> inner_data_space[$name];
	}
	
	public function __toString(){
		return $this -> content;
	}

	public function Clear(){
		$this -> inner_data_space = array();
	}
		
	public function GetLanguage($name, $type){
		$document = Document::GetInstance();
				
		$file = '.'.DS.'languages'.DS.$document -> lang['prefix'].DS;
		
		if($type != 'class')
			$file .= $type.DS;
		
		$file .= $name.'.lang.php';

		if(file_exists($file))
			include($file);
		else
			$LANG = array();

		$this -> LANG = $LANG;
	}
	
	public function Get($file, $type){
		$file .= '.tpl.php';
		if($type != 'class')
			$file = $type.DS.$file;

		extract($this -> inner_data_space);

		ob_start();
		if(file_exists($this -> path.DS.$file))
			$tpl = $this -> path.DS.$file;
		else
			$tpl = '.'.DS.'templates'.DS.'system'.DS.'html'.DS.$file;
		
		include $tpl;
		
		$return = ob_get_contents();
		
		ob_end_clean();

		$this -> Clear();
		
		return $this -> content = $return;
	}
	
	public function Show(){
		echo $this;
	}
}

?>