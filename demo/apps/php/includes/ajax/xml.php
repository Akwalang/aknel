<?php
defined("AKNEL_LOCK") or die();

$content = Document::Content('return');
$xmlDOM = "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
			."<response>"
				."<content>"
					.$content
				."</content>"
			."</response>";
			
$xml = simplexml_load_string($xmlDOM);	
 
header("Content-type: text/xml");
echo $xml->asXML();
?>