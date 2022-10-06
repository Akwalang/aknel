<?php
define("AKNEL_LOCK", 1);
define("DS", DIRECTORY_SEPARATOR);

include_once("..".DS."..".DS."options.php");
function __autoload($className){
	$className = strtolower($className);
	include_once("..".DS."objects".DS.$className.".class.php");
}

$tamplate = array();
$template['id'] = SQL::getInstance() -> fetchOnce("SELECT id FROM ak_templates WHERE stat='1'");
$template['files'] = SQL::getInstance() -> fetch("SELECT file, links FROM ak_templates_files WHERE template_id='{$template['id']}'");
foreach($template['files'] as $key => &$file){
	if(empty($file['links'])){
		unset($template['files'][$key]);
	}
	else{
		$file['links'] = explode('|', substr($file['links'], 1, -1));
	}
}

$SQLlinks = SQL::getInstance() -> query("SELECT id, link FROM ak_module_menu");
$links = array();
while($row = mysql_fetch_assoc($SQLlinks)){
	$links[$row['id']] = $row['link'];
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
				$javaScript[$templateFile['file']][] = 'index.php';
			}
			else{
				$javaScript[$templateFile['file']][] = $links[$linkId];
			}
		}
	}
}

header("Content-Type: application/javascript");
echo 'var TaL = '.json_encode($javaScript).';';
?>
