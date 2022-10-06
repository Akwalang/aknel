<?php
define("LOCK", 1);
define("DS", DIRECTORY_SEPARATOR);
define("ROOT", "http://".$_SERVER['HTTP_HOST']);

include_once("..".DS."..".DS."options.php");
function __autoload($className){
	$className = strtolower($className);
	include_once("..".DS."php".DS.$className.".class.php");
}

##### Templates #####

$tamplate = array();
$temp = SQL::FetchRow("SELECT id, directory FROM ##_sys_template WHERE enable = 1");
$template['id'] = $temp['id'];
$template['directory'] = $temp['directory'];
$template['files'] = SQL::FetchAll("SELECT file, links FROM ##_sys_template_file WHERE template_id = {$template['id']} ");
foreach($template['files'] as $key => &$file){
	if(empty($file['links'])){
		unset($template['files'][$key]);
	}
	else{
		$file['links'] = explode('|', substr($file['links'], 1, -1));
	}
}

$SQLlinks = SQL::FetchAll("SELECT id, cache, enable FROM ##_sys_link");
$links = array();
foreach($SQLlinks as $item){
	if($item['start'] == 1)
		$links[$item['id']] = '/';
	else
		$links[$item['id']] = $item['cache'];
}

$javaScript = array();
foreach($template['files'] as $templateFile){
	if($templateFile['links'][0] == -1){
		$javaScript['defaultTemplate'] = $templateFile['file'];
	}
	else{
		$javaScript[$templateFile['file']] = array();
		foreach($templateFile['links'] as $linkId){
			if($linkId === '0'){
				$javaScript[$templateFile['file']][] = '';
				$javaScript[$templateFile['file']][] = '/';
				$javaScript[$templateFile['file']][] = 'index.'.Options::PAGE_EXTENSION;
			}
			elseif($linkId == 'error'){
				$javaScript[$templateFile['file']][] = 'error';
			}
			else{
				$javaScript[$templateFile['file']][] = $links[$linkId];
			}
		}
	}
}

##### Categories #####

$query = "SELECT id, aliace
		  FROM	 ##_sys_category";

$items = SQL::FetchAll($query);

$categories = '{';
foreach($items as $key => $item){
	if($key)
		$categories .= ',';
	$categories .= '"'.$item['aliace'].'":'.$item['id'];
}
$categories .= '}';

##### Positions #####

$query = "SELECT   position, module_id, categories
		  FROM	   ##_module_position
		  ORDER BY position";

$items = SQL::FetchAll($query);

$positions = array();
foreach($items as $item){
	if(!isset($positions[$item['position']]))
		$positions[$item['position']] = array();
	$positions[$item['position']][$item['module_id']] = explode('|', substr($item['categories'], 1, -1));
}
$positions = json_encode($positions);
$positions = preg_replace('#"([0-9]+)"#', '$1', $positions);

##### Positions #####

$query = "SELECT prefix
		  FROM	 ##_sys_language
		  WHERE	 side = 0 AND `default` = 0";

$items = SQL::FetchAll($query);

$languages = '[';
foreach($items as $key => $item)
	if($key)
		$languages .= ',';
	$languages .= '"/'.$item['prefix'].'/"';
$languages .= ']';

##### BadGetway Error #####

preg_match('#/([a-z0-9]+)/#', str_replace(ROOT, '', $_SERVER['HTTP_REFERER']), $matches);

if($matches[1]){
	$query = "SELECT id
			  FROM   ##_sys_language
			  WHERE  prefix = ?";
	$params = array($matches[1]);
	$lang = SQL::FetchOne($query, $params);
}

if(!$lang){
	$query = "SELECT id
			  FROM   ##_sys_language
			  WHERE  `default` = 1";
	$lang = SQL::FetchOne($query);
}

$query = "SELECT title, text
		  FROM   ##_com_error
		  WHERE  code = ? and language_id = ?";
$params = array(504, $lang);
$error = SQL::FetchRow($query, $params);

$item = new stdClass;
$item -> title = $error['title'];
$item -> text = $error['text'];

$tpl = new TPL;
$tpl -> path = '..'.DS.'..'.DS.'templates'.DS.$template['directory'].DS.'html'.DS;
$tpl -> item = $item;
$tpl -> Get('error_view', 'component');

$responce = array();
$responce['data'] = null;
$responce['favicon'] = false;
$responce['title'] = $item -> title;
$responce['content'] = $tpl -> content;
$responce['date_change'] = null;
$responce['styles'] = array();
$responce['scripts'] = array();
$responce['loader'] = 'error';
$responce['timer'] = null;
$responce['modules'] = array();

$responce = json_encode($responce);

##### Display #####

header("Content-Type: application/javascript");
echo 'var TaL = '.json_encode($javaScript).','."\n";
echo "\t".'pageType = ".'.Options::PAGE_EXTENSION.'",'."\n";
echo "\t".'categories = '.$categories.','."\n";
echo "\t".'positions = '.$positions.';'."\n";
echo "\t".'languages = '.$languages.';'."\n";
echo "\t".'load_error = '.$responce.';'."\n";

?>
