<?php

class SQL {
	static protected $_pdo;
	
	private function __construct(){
	}
	private function __clone(){
	}
	
	static function Close(){
		if(self::$_pdo)
			self::$_pdo = null;
	}
	
	static function GetInstance(){
		if(!self::$_pdo){
			self::$_pdo = new PDO('mysql:host='.Options::DB_SERVER.';dbname='.Options::DB_NAME, Options::DB_USER, Options::DB_PASSWORD);
			self::$_pdo -> exec("SET NAMES ".Options::CHARSET);
			self::$_pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		return self::$_pdo;
	}
	
	static function Query($query, $params = array()){
		try{
			if(Options::DB_PREFIX)
				$query = str_replace('##', Options::DB_PREFIX, $query);
			else
				$query = str_replace('##_', '', $query);
			
			$pdo = self::GetInstance();
			$stmt = $pdo -> prepare($query);
			$stmt -> execute($params);

			return $stmt;
		}
		catch(PDOException $e){
			self::Error($query, $e -> getMessage());
		}
	}
	
	static function FetchAll($query, $params = array()){
		return self::Query($query, $params) -> fetchAll(PDO::FETCH_ASSOC);
	}
	
	static function FetchRow($query, $params = array()){
		return self::Query($query, $params) -> fetch(PDO::FETCH_ASSOC);
	}
	
	static function FetchOne($query, $params = array()){
		return self::Query($query, $params) -> fetchColumn();
	}
	
	static function NumRow($result){
		if(is_array($result))
			return count($result);
		return $result -> columnCount();
	}
	
	static function InsertId(){
		return self::GetInstance() -> lastInsertId();
	}
	
	static function Error($query, $message){
		if(Options::ERRORS){
			$error = '<h2>Произошла ошибка запроса к БД</h2>
					  <p><b>Запрос:</b> '.$query.'<br />
					  <b>Параметры ошибки:</b> '.$message.'</p>';
			echo $error;
		}
		die();
	}
}
?>