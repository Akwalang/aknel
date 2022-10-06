<?php
defined("LOCK") or die();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<?php $document -> Head() ?>

<script type="text/javascript" src="<?php $document -> Template() ?>js/jquery-ui-1.9.0.custom.min.js"></script>
<script type="text/javascript" src="<?php $document -> Template() ?>js/jquery.video.js"></script>

<link rel="stylesheet" href="<?php $document -> Template() ?>css/template.css" />
<link rel="stylesheet" href="<?php $document -> Template() ?>css/services_page.css" />

<script type="text/javascript">
	var error_handler = <?=$document -> error ? $document -> error : 0?>
</script>

</head>

<body>
<!-- Start Page -->
<div id="sp">
	<div class="top_path">
		<div class="rounded_bg">
			<div class="prev slide_controll">
			</div>
			<div class="next slide_controll">
			</div>
			<div class="all_to_center">
				<div class="centered">
					<a href="<?=ROOT?><?=LINK_LANG?>/" class="logo">
						<div class="pozer">
							<div class="logo_active simple">
							</div>
							<div class="logo_active hover">
							</div>
						</div>
					</a>
					<div class="lang_menu">
						<?php $document -> Module('language', 'simple') ?>
					</div>
					<div class="main_menu">
						<?php $document -> Module('main', 'main') ?>
					</div>
					
					<div class="services_menu">
						<?php $document -> Module('categories', 'simple') ?>
					</div>
					
					<div class="content">
						<div class="ajax_loader <?php $document -> Loader() ?>">
							<?php $document -> Content() ?>
						</div>
						<div class="scene">
						</div>
					</div>
					
					<div class="services_inner_menu">
						<div class="table">
							<?php $document -> Module('services', 'services') ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom_path">
		<div class="back_to_top">
		</div>
		<div class="all_to_center">
			<div class="centered">
				<div class="footer_level">
					<?php $document -> Module('footer', 'column') ?>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>
