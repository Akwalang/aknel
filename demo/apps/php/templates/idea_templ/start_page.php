<?php
defined("AKNEL_LOCK") or die();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo Document::Title() ?></title>
<link href="./templates/<?php echo $template['directory']; ?>/<?php echo $template['favicon']; ?>.ico" rel="icon" type="image/x-icon" />
<script type="text/javascript" src="./includes/js/script.php?templates"></script>
<script type="text/javascript" src="./librarys/js/jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="./librarys/js/jquery.favicon.js"></script>
<script type="text/javascript" src="./templates/<?php echo $template['directory']; ?>/js/jQueryRotate.2.1.js"></script>
<script type="text/javascript" src="./templates/<?php echo $template['directory']; ?>/js/template.js"></script>
<script type="text/javascript" src="./includes/js/ajaxsend.0.3.0.mm.js"></script>
<link rel="stylesheet" href="templates/<?php echo $template['directory']; ?>/css/template.css" />
<link rel="stylesheet" href="templates/<?php echo $template['directory']; ?>/css/<?php echo $template['file']; ?>.css" />
</head>

<body>
<div id="sp">
    <div id="content_bg">
    </div>
    <div id="items_block">
        <div id="all_to_center">
            <div id="logo_scene">
                <div id="logo">
                	<a href="/"></a>
                </div>
                <div id="signature">
                </div>
            </div>
            <div id="menu_scene">
                <div id="menu">
                    <?php Document::Module("horizontal_menu","") ?>
                </div>
            </div>
            <div id="scene_to_position">
                <div id="animation_scene">
                    <div id="content_scene">
                        <div class="ajax_loader">
                            <?php Document::Content() ?>
                        </div>
                    </div>
                    <div id="sq1">
                        <div></div>
                    </div>
                    <div id="sq2">
                        <div></div>
                    </div>
                    <div id="sq3">
                        <div></div>
                    </div>
                    <div id="sq4">
                        <div></div>
                    </div>
                    <div id="sq5">
                        <div></div>
                    </div>
                    <div id="sq6">
                        <div></div>
                    </div>
                    <div id="sq7">
                        <div></div>
                    </div>
                    <div id="sq8">
                        <div></div>
                    </div>
                    <span class="text">AKNEL</span>
                </div>
            </div>

            <div class="right_square" id="rs1"></div>
            <div class="right_square" id="rs2"></div>
            <div class="right_square" id="rs3"></div>
            <div class="right_square" id="rs4"></div>
            <div class="right_square" id="rs5"></div>
            <div class="right_square" id="rs6"></div>

            <div class="left_square" id="ls1"></div>
            <div class="left_square" id="ls2"></div>
            <div class="left_square" id="ls3"></div>
            <div class="left_square" id="ls4"></div>
            <div class="left_square" id="ls5"></div>
            <div class="left_square" id="ls6"></div>
            <div class="left_square" id="ls7"></div>
            <div class="left_square" id="ls8"></div>
            <div class="left_square" id="ls9"></div>
            <div class="left_square" id="ls10"></div>

        </div>
    </div>
</div>
</body>
</html>
