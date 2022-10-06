<?php
defined("LOCK") or die();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<?php $document -> Head() ?>

<script type="text/javascript" src="<?php $document -> Template() ?>js/jquery-ui-1.9.0.custom.min.js"></script>
<?php /*?><script type="text/javascript" src="<?php $document -> Template() ?>js/template.js"></script><?php */?>

<link rel="stylesheet" href="<?php $document -> Template() ?>css/template.css" />

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
					<a href="/" class="logo">
						<div class="pozer">
							<div class="logo_active simple">
							</div>
							<div class="logo_active hover">
							</div>
						</div>
					</a>
					<div class="lang_menu">
						<ul>
							<li class="active_item">
								<a href="/qwe.html">
									<span class="text">eng</span>
									<div class="active"></div>
								</a>
							</li>
							<li>
								<a href="/asd.html">
									<span class="text">rus</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="main_menu">
						<ul>
							<li>
								<a href="/">
									<span class="active">
										what we do
									</span>
									<span class="bg"></span>
								</a>
								<ul>
									<li class="active_item">
										<a href="/asd.html">
											<span class="text">Creative Consulting</span>
											<span class="arrow"></span>
										</a>
									</li>
									<li>
										<a href="/qwe.html">
											<span class="text">Media Marketing</span>
											<span class="arrow"></span>
										</a>
									</li>
									<li>
										<a href="/asd.html">
											<span class="text">App. development</span>
											<span class="arrow"></span>
										</a>
									</li>
								</ul>
							</li>
							<li class="active_item">
								<a href="/asd.html">
									about us
								</a>
							</li>
							<li>
								<a href="/qwe.html">
									contacts
								</a>
							</li>
						</ul>
					</div>
					
					<div class="services_menu">
						<ul>
							<li class="eq-1 active_menu">
								<a href="">
									<div class="text">
										Creative Consulting
									</div>
									<div class="shadow">
									</div>
									<div class="image">
									</div>
									<div class="video">
									</div>
								</a>
							</li>
							<li class="eq-2">
								<a href="">
									<div class="text">
										Media Marketing
									</div>
									<div class="shadow">
									</div>
									<div class="image">
									</div>
									<div class="video">
									</div>
								</a>
							</li>
							<li class="eq-3">
								<a href="">
									<div class="text">
										Application development
									</div>
									<div class="shadow">
									</div>
									<div class="image">
									</div>
									<div class="video">
									</div>
								</a>
							</li>
						</ul>
					</div>
					
					<div class="content">
						<div class="ajax_loader">
							<?php $document -> Content() ?>
						</div>
						<div class="scene">
						</div>
					</div>
					
					<div class="services_inner_menu">
						<div class="table">
							<ul class="color_violet">
								<li class="eq-1">
									<a href="/qwe.html">
										<div class="simple">
										</div>
										<div class="active">
										</div>
										<div class="hover">
										</div>
										<div class="icon">
										</div>
										<div class="text">
											creative review
										</div>
									</a>
								</li>
								<li class="eq-2">
									<a href="/asd.html">
										<div class="simple">
										</div>
										<div class="active">
										</div>
										<div class="hover">
										</div>
										<div class="icon">
										</div>
										<div class="text">
											brand strategy and management
										</div>
									</a>
								</li>
								<li class="eq-3">
									<a href="/zxc.html">
										<div class="simple">
										</div>
										<div class="active">
										</div>
										<div class="hover">
										</div>
										<div class="icon">
										</div>
										<div class="text">
											marketing and sales strategy
										</div>
									</a>
								</li>
								<li class="eq-4">
									<a href="/try.html">
										<div class="simple">
										</div>
										<div class="active">
										</div>
										<div class="hover">
										</div>
										<div class="icon">
										</div>
										<div class="text">
											business development
										</div>
									</a>
								</li>
								<li class="eq-5 active_item">
									<a href="/fgh.html">
										<div class="simple">
										</div>
										<div class="active">
										</div>
										<div class="hover">
										</div>
										<div class="icon">
										</div>
										<div class="text">
											executive production
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom_path">
		<div class="all_to_center">
			<div class="centered">
				<div class="footer_level">
					<div class="column">
						<div class="menu">
							<div class="head">
								Creative consulting
							</div>
							<div class="items">
								<ul>
									<li class="active_item">
										<a href="/qwe.html">
											<span class="active">- Creative review</span>
										</a>
									</li>
									<li>
										<a href="/asd.html">
											<span>- Brand strategy and management</span>
										</a>
									</li>
									<li>
										<a href="/zxc.html">
											<span>- Marketing and sales strategy</span>
										</a>
									</li>
									<li>
										<a href="/try.html">
											<span>- Business development</span>
										</a>
									</li>
									<li>
										<a href="/fgh.html">
											<span>- Executive production</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="menu">
							<div class="head">
								Media marketing
							</div>
							<div class="items">
								<ul>
									<li>
										<a href="">
											<span>- Multimedia design</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Internet marketing</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Television and radio advertsing</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Viral marketing</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Content development</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="menu">
							<div class="head">
								Application development
							</div>
							<div class="items">
								<ul>
									<li>
										<a href="">
											<span>- iPhone / iPad Application Development</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Android Application Development</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Cross Platform Mobile Development</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="menu">
							<div class="head">
								About us
							</div>
							<div class="items">
								<ul>
									<li>
										<a href="">
											<span>- Who we are</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Mission</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Testimonials</span>
										</a>
									</li>
									<li>
										<a href="">
											<span>- Contact Us</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $document -> Adminka() ?>
</body>
</html>
