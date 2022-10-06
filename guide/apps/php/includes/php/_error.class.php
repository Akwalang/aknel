<?php

class Error {
	static public function Show($code){
		global $document;
		
		include('.'.DS.'errors'.DS.$code.'.php');
		
		$document -> error = 1;
		$document -> title = $error['title'];
		$document -> content = $error['content'];
		
		if(!isset($_POST['ajax']))
			switch($code){
				case 404:
					header('HTTP/1.0 404 NotFound');
					break;
			}
	}
}

?>