<?php

class ContentHandler {
	function FormDataTree($categories, $pages){
		$formed = array();
		self::CatRunner($categories, $pages, $formed, 0);
		return $formed;
	}
	function CatRunner(&$categories, &$pages, &$array, $id_parent){
		$array['categories'] = array();
		$array['articles'] = array();
		
		foreach($categories as $key => $info)
			if($info['id_parent'] == $id_parent){
				unset($categories[$key]);
				self::CatRunner($categories, $pages, $info['childs'], $info['id']);
				array_push($array['categories'], $info);
			}
		
		foreach($pages as $key => $article){
			if($article['id_cat'] == $id_parent){
				unset($pages[$key]);
				array_push($array['articles'], $article);
			}
		}
	}
	function FormViewTree(){
	}
}

?>