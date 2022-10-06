<?php

class Display {
	static public function Show(){
		$document = Document::GetInstance();
		
		$query = "SELECT file
				  FROM   ##_sys_favicon
				  WHERE  links LIKE ?
				  		 AND template_id = ?
				  LIMIT  1";
		$params = array(
			'%|'.$document -> page['link_id'].'|%',
			$document -> template['id']
		);
		
		$document -> favicon = SQL::FetchOne($query, $params);

		if(isset($_POST['ajax']) or isset($_POST['manager']))
			self::Ajax();
		else
			self::Simple();
	}

	static public function Ajax(){
		$document = Document::GetInstance();
		$json = array();
		
		if(isset($document -> status))
			$json['status'] = $document -> status;
		if(isset($document -> admin_content))
			$json['admin_content'] = $document -> admin_content;
		
		$json['data'] = $document -> data;
		$json['favicon'] = $document -> favicon;
		$json['title'] = $document -> title;
		$json['content'] = $document -> content;
		$json['date_change'] = $document -> date_change;
		$json['styles'] = $document -> styles;
		$json['scripts'] = $document -> scripts;
		$json['loader'] = $document -> loader;
		$json['timer'] = Timer::End(false);
		
		$json['modules'] = array();
		if(isset($_POST['modules'])){
			foreach($_POST['modules'] as $field => $ids){
				if(!isset($json['modules'][$field]))
					$json['modules'][$field] = array();
				
				foreach($ids as $id){
					array_push($json['modules'][$field], $document -> ModuleById($id));
				}
			}
		}
		
		header('Content-type: application/json');
		die(json_encode($json));
	}

	static public function Simple(){
		$document = Document::GetInstance();
		
		$query = "SELECT file
				  FROM   ##_sys_template_file
				  WHERE  template_id = ?
						 AND links LIKE ?";
		$params = array(
			$document -> template['id'],
			'%|'.$document -> page['link_id'].'|%'
		);
		
		$file = SQL::FetchOne($query, $params);
		
		if(!$file){
			$params = array($document -> template['id'], '%|-1|%');
			$file = SQL::FetchOne($query, $params);
		}
		
		$document -> template['file'] = $file;
		
		// ThePlaceForCacheSave

//		$document -> AddScript('/administrator/js/manager.js', false);
		$document -> AddScript('/includes/js/ajaxsend.0.4.1.js', false);
		$document -> AddScript('/templates/'.$document -> template['directory'].'/js/template.js', false);
		$document -> AddScript('/core.js', false);
		$document -> AddScript('/librarys/js/jquery.favicon.js', false);
		$document -> AddScript('/librarys/js/jquery-1.8.2.min.js', false);
		
		$document -> AddStyle('/templates/system_templ/css/system.css');
		$document -> AddStyle('/templates/'.$document -> template['directory'].'/css/'.$file.'.css');
		
		include('.'.DS.'templates'.DS.$document -> template['directory'].DS.$file.'.php');
	}
}

?>