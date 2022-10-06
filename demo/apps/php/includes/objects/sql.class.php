<?php
defined("AKNEL_LOCK") or die();

class SQL{
	protected $_connect;
	protected $_disconnect;
	protected $_dataBase;
	static public $instance;
	private function __construct(){
		$this -> _connect = mysql_connect(Options::DB_SERVER, Options::DB_USER, Options::DB_PASSWORD) or die("Ошибка при подключении к базе данных.");
		mysql_query("SET NAMES ".Options::CHARSET);
		$this -> _dataBase = mysql_select_db(Options::DATABASE, $this -> _connect) or die("Ошибка выбора базы данных");
	}
	private function __clone(){
	}
	static function close(){
		$this -> _disconnect = mysql_close($this -> connect);
	}
	static function getInstance(){
		if(!$instance){
			self::$instance = new SQL();
		}
		return self::$instance;
	}
	static function query($query){
		$SQLresult = mysql_query($query) or self::error($query);
		return $SQLresult;
	}
	static function fetch($query){
		$SQLresult = self::query($query);
		$array = array();
		while($row = mysql_fetch_assoc($SQLresult)){
			$array[] = $row;
		}
		return $array;
	}
	static function fetchAlone($query){
		$SQLresult = self::query($query);
		$row = mysql_fetch_assoc($SQLresult);
		return $row;
	}
	static function fetchOnce($query){
		$SQLresult = self::query($query);
		$row = mysql_fetch_row($SQLresult);
		return $row[0];
	}
	static function numRow($result){
		return mysql_num_rows($result);
	}
	static function error($query){
		if(Options::ERRORS){
			$error = "<h2>Произошла ошибка запроса базы данных</h2>
					  <p><b>Запрос:</b> ".$query."<br />
					  <b>Текст ошибки:</b> ".mysql_error()."</p>";
			echo $error;
		}
		die();
	}
}
?>