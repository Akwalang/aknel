// JavaScript Document
var templSets = {
	showBackground: 0,
	start_page: {
		construct: 700,
		distruct: 0,
		change: {
			start: 600,
			end: 400
		}
	},
	services_page: {
		construct: 700,
		distruct: 700,
		change: {
			start: 600,
			end: 400
		}
	},
	article_page: {
		construct: 700,
		distruct: 700,
		change: {
			start: 600,
			end: 400
		}
	}
};
var templates = {
	start_page: {
		startHide: function(){
			$(document).ready(function(){
				Elements.ArticleContent.StartHide();
				Elements.Logo.StartHide();
				Elements.LangMenu.StartHide();
				Elements.MainMenu.StartHide();
				Elements.CategoriesMenu.StartHide();
				Elements.FooterMenu.StartHide();
				Elements.BackToTop.StartHide();
			});
		},
		startShow: function(){
			$(window).load(function(){
				Elements.Logo.StartShow();
				Elements.LangMenu.StartShow();
				Elements.MainMenu.StartShow();
				Elements.CategoriesMenu.StartShow();
				Elements.FooterMenu.StartShow();
				setTimeout(Elements.ArticleContent.StartShow, 600);
				Elements.BackToTop.StartShow();
			});
		},
		construct: function(){
			Elements.StartContent.Construct();
		},
		distruct: function(){
		},
		position: function(){
		},
		content: {
			hide: function(){
				Elements.ServiceContent.Hide();
				Elements.ArticleContent.Hide();
			},
			show: function(){
				Elements.ServiceContent.Show();
				Elements.ArticleContent.Show();
			}
		}
	},
	services_page: {
		startHide: function(){
			$(document).ready(function(){
				Elements.ServiceContent.StartHide();
				Elements.Logo.StartHide();
				Elements.LangMenu.StartHide();
				Elements.MainMenu.StartHide();
				Elements.CategoriesMenu.StartHide();
				Elements.SlideArrows.StartHide();
				Elements.ServicesMenu.StartHide();
				Elements.FooterMenu.StartHide();
				Elements.BackToTop.StartHide();
			});
		},
		startShow: function(){
			$(window).load(function(){
				Elements.Logo.StartShow();
				Elements.LangMenu.StartShow();
				Elements.MainMenu.StartShow();
				Elements.CategoriesMenu.StartShow();
				Elements.SlideArrows.StartShow();
				Elements.ServicesMenu.StartShow();
				Elements.FooterMenu.StartShow();
				setTimeout(Elements.ServiceContent.StartShow, 600);
				Elements.BackToTop.StartShow();
			});
		},
		construct: function(){
			Elements.ServiceContent.Show();
			Elements.SlideArrows.Show();
			Elements.ServicesMenu.Construct();
			Elements.ServiceContent.Construct();
		},
		distruct: function(){
			Elements.SlideArrows.Hide();
			Elements.ServiceContent.Hide();
			setTimeout(Elements.ServicesMenu.Distruct, 500);
			setTimeout(Elements.ServiceContent.Distruct, 500);
		},
		position: function(){
			$(window).load(function(){
				$('.content').height(315);
				$('.services_inner_menu').height(150);
			});
		},
		content: {
			hide: function(){
				Elements.ServiceContent.Hide();
			},
			show: function(){
				Elements.ServiceContent.Show();
			}
		}
	},
	article_page: {
		startHide: function(){
			$(document).ready(function(){
				Elements.ArticleContent.StartHide();
				Elements.Logo.StartHide();
				Elements.LangMenu.StartHide();
				Elements.MainMenu.StartHide();
				Elements.CategoriesMenu.StartHide();
				Elements.FooterMenu.StartHide();
				Elements.BackToTop.StartHide();
			});
		},
		startShow: function(){
			$(window).load(function(){
				Elements.Logo.StartShow();
				Elements.LangMenu.StartShow();
				Elements.MainMenu.StartShow();
				Elements.CategoriesMenu.StartShow();
				Elements.FooterMenu.StartShow();
				setTimeout(Elements.ArticleContent.StartShow, 600);
				Elements.BackToTop.StartShow();
			});
		},
		construct: function(){
			Elements.ArticleContent.Construct();
		},
		distruct: function(){
			Elements.ArticleContent.Hide();
			setTimeout(Elements.ArticleContent.Distruct, 500);
		},
		position: function(){
			$(window).load(function(){
				$('.content').height(250);
			});
		},
		content: {
			hide: function(){
				Elements.ArticleContent.Hide();
			},
			show: function(){
				Elements.ArticleContent.Show();
			}
		}
	},
	MenuChange: function(path, catId){
//		Elements.LangMenu.AutoChange(path);
		Elements.MainMenu.AutoChange(path);
		Elements.CategoriesMenu.AutoChange(catId);
		Elements.ServicesMenu.AutoChange(path);
		Elements.FooterMenu.AutoChange(path);
	},
	ModuleChange: function(){
		Elements.ServicesMenu.ModuleChange();
	},
	Init: function(page){
		Elements.StartContent.Init();
		Elements.ServiceContent.Init();
		Elements.ArticleContent.Init();
		Elements.Logo.Init();
		Elements.LangMenu.Init();
		Elements.MainMenu.Init();
		Elements.CategoriesMenu.Init();
		Elements.SlideArrows.Init();
		Elements.ServicesMenu.Init();
		Elements.FooterMenu.Init();
		Elements.BackToTop.Init();
	}
};
var GlobalSets = GS = {
	Hover: 'hover',
	Active: 'active_item'
};
var Elements = {
	StartContent: (function(){
		var GETTER = {
				Start: '.content'
			},
			Objects = {},
			Construct = function(){
				Objects.Start.animate({height: 0}, 400);
			},
			Distruct = function(){
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
			};
		return {
			Init: Init,
			Construct: Construct,
			Distruct: Distruct
		};
	})(),
	ServiceContent: (function(){
		var GETTER = {
				Start: '.content'
			},
			Objects = {},
			StartHide = function(){
				var loader = Objects.Start.children('.ajax_loader.service');
				if(!loader.length)
					return;
				
				loader.find('.head').css({opacity: 0});
				loader.find('.text').css({opacity: 0});
				loader.find('.top_line, .bottom_line').css({display: 'none', width: 0});
				loader.find('.icon').css({opacity: 0});
			},
			StartShow = function(){
				var loader = Objects.Start.children('.ajax_loader.service');
				if(!loader.length)
					return;
				
				loader.find('.head').delay(300).animate({opacity: 1}, 300);
				loader.find('.text').delay(300).animate({opacity: 1}, 600, function(){
					loader.find('.top_line, .bottom_line').css('display', 'inline-block').animate({width: '100%'}, 500);
				});
				loader.find('.icon').animate({opacity: 1}, 800);
			},
			Show = function(){
				StartHide();
				StartShow();
			},
			Hide = function(){
				var loader = Objects.Start.children('.ajax_loader.service');
				if(!loader.length)
					return;
				
				loader.find('.head').delay(200).animate({opacity: 0}, 200);
				loader.find('.text_block').delay(200).animate({opacity: 0}, 400);
				loader.find('.icon').animate({opacity: 0}, 600, function(){
					loader.remove();
				});
			},
			Construct = function(){
				Objects.Start.animate({height: 315}, 300);
			},
			Distruct = function(){
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			Construct: Construct,
			Distruct: Distruct,
			Show: Show,
			Hide: Hide
		};
	})(),
	ArticleContent: (function(){
		var GETTER = {
				Start: '.content'
			},
			Objects = {},
			StartHide = function(){
				var loader = Objects.Start.children('.ajax_loader.article, .ajax_loader.error');
				if(!loader.length)
					return;
				
				loader.find('.title').css({opacity: 0});
				loader.find('.text').css({opacity: 0});
				loader.find('.top_line').css({display: 'none', width: 0});
			},
			StartShow = function(){
				var loader = Objects.Start.children('.ajax_loader.article, .ajax_loader.error');
				if(!loader.length)
					return;
				
				loader.find('.title').animate({opacity: 1}, 300);
				loader.find('.text').delay(200).animate({opacity: 1}, 600);
				loader.find('.top_line').delay(300).css('display', 'inline-block').animate({width: 446}, 500);
			},
			Show = function(){
				var loader = Objects.Start.children('.ajax_loader.article, .ajax_loader.error');
				
				StartHide();
				
				Objects.Start.animate({height: loader.height()}, 300, StartShow);
			},
			Hide = function(){
				var loader = Objects.Start.children('.ajax_loader.article, .ajax_loader.error');
				if(!loader.length)
					return;
				
				Objects.Start.height(loader.height());
				
				loader.find('.title').animate({opacity: 0}, 300);
				loader.find('.top_line').delay(100).animate({opacity: 0}, 300);
				loader.find('.text').delay(200).animate({opacity: 0}, 300, function(){
					loader.remove();
				});
			},
			Construct = function(){
				var loader = Objects.Start.children('.ajax_loader.article, .ajax_loader.error');
				
				StartHide();
				Objects.Start.animate({height: loader.height()}, 400, StartShow);
			},
			Distruct = function(){
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			Construct: Construct,
			Distruct: Distruct,
			Show: Show,
			Hide: Hide
		};
	})(),
	Logo: (function(){
		var GETTER = {
				Start: '.logo',
				Simple: 'div.simple',
				Hover: 'div.hover'
			},
			Objects = {},
			StartHide = function(){
				Objects.Start.hide();
				Objects.Simple.css({opacity: 0, left: 150});
			},
			StartShow = function(){
				Objects.Start.fadeIn();
				Objects.Simple.delay(250).animate({opacity: 1, left: 53}, 500);
			},
			Enter = function(){
				if(Objects.Simple.is(':animated') || Objects.Start.is(':animated'))
					return;
				
				Objects.Hover.stop().fadeTo(300, 1);
			},
			Leave = function(){
				Objects.Hover.stop().fadeTo(300, 0);
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				Objects.Start.bind({mouseenter: Enter, mouseleave: Leave});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow
		};
	})(),
	LangMenu: (function(){
		var GETTER = {
				Start: '.lang_menu',
				Item: 'li',
				Link: 'a'
			},
			Objects = {},
			Sets = {
				ActiveBlock: 'active',
				SimpeColor: '#21b5cb',
				HoverColor: '#883f98'
			},
			StartHide = function(){
				Objects.Start.hide();
			},
			StartShow = function(){
				Objects.Start.fadeIn(800);
			},
			ReDom = function(){
				Objects.Link.each(function(){
					var $this = $(this);
					if(!$this.children('.' + Sets.ActiveBlock).length)
						$this.append('<div class="' + Sets.ActiveBlock + '">');
				});
			},
			Enter = function(){
				var $this = $(this);
				$this.addClass(GS.Hover);
				if(!$this.hasClass(GS.Active))
					$(this).stop().animate({backgroundColor: Sets.HoverColor}, 300);
			},
			Leave = function(){
				var $this = $(this);
				$this.removeClass(GS.Hover);
				if(!$this.hasClass(GS.Active))
					$(this).stop().animate({backgroundColor: Sets.SimpeColor}, 300);
			},
			On = function(element){
				element.find('.' + Sets.ActiveBlock).fadeIn();
				if(element.hasClass(GS.Hover))
					element.stop().animate({backgroundColor: Sets.SimpeColor}, 300);
			},
			Off = function(element){
				element.find('.' + Sets.ActiveBlock).fadeOut(400, function(){
					element.removeClass(GS.Active);
				});
			},
			Auto = function(path){
				var NewLinks = Objects.Item.has('a[href$="' + path + '"]'),
					OldLinks = Objects.Item.filter('.' + GS.Active).not(NewLinks);
				
				Off(OldLinks);
				
				NewLinks.each(function(){
					var ListItem = $(this);
					if(ListItem.hasClass(GS.Active))
						return;
					
					On(ListItem);
					ListItem.addClass(GS.Active);
				});
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				ReDom();
				
				Objects.Item.bind({mouseenter: Enter, mouseleave: Leave});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			AutoChange: Auto
		};
	})(),
	MainMenu: (function(){
		var GETTER = {
				Start: '.main_menu',
				MainBlock: 'ul:first',
				FirstLevel: 'ul:first > li',
				SecondLevel: 'ul:first > li li'
			},
			Objects = {},
			Sets = {
				FirstLevel: {
					Simple: 'text',
					Hover: 'active',
					BackGround: 'bg'
				}
			},
			StartHide = function(){
				Objects.MainBlock.css({display: 'none'});
				if($.browser.msie && $.browser.version == 8)
					Objects.FirstLevel.css({opacity: 0});
				else
					Objects.FirstLevel.css({opacity: 0, marginTop: -25});
			},
			StartShow = function(){
				var width = Objects.FirstLevel.eq(0).width() * Objects.FirstLevel.length;
				Objects.MainBlock.css({width: 0, display: 'block'}).animate({width: width}, 400, function(){
					Objects.FirstLevel.each(function(i){
						if($.browser.msie && $.browser.version == 8)
							$(this).delay(150 * i).animate({opacity: 1}, 250);
						else
							$(this).delay(150 * i).animate({marginTop: 0, opacity: 1}, 250, function(){
								$(this).css({marginTop: 0});
							});
					});
				});
			},
			ReDom = function(){
				Objects.FirstLevel.each(function(){
					var link = $(this).find(' > a, > span'),
						text = link.text();
					link.text('');
					if(!link.children('.' + Sets.FirstLevel.Simple).length)
						link.append('<span class="' + Sets.FirstLevel.Simple + '">' + text + '</span>');
					if(!link.children('.' + Sets.FirstLevel.Hover).length)
						link.append('<span class="' + Sets.FirstLevel.Hover + '">' + text + '</span>');
					if(!link.children('.' + Sets.FirstLevel.BackGround).length)
						link.append('<span class="' + Sets.FirstLevel.BackGround + '"></span>');
				});
			},
			FirstLevelEnter = function(event){
				var $this = $(this);
				FirstLevelOn($this.addClass(GS.Hover));
				ShowDDMenu($this);
			},
			FirstLevelLeave = function(){
				var $this = $(this);
				FirstLevelOff($this.removeClass(GS.Hover));
				HideDDMenu($this);
			},
			FirstLevelOn = function(element){
				var $this = element;

				if($this.hasClass(GS.Active))
					return;
				
				$this.find('.' + Sets.FirstLevel.BackGround).stop(true).css({top: 18, width: 18}).animate({top: 0}, 100).animate({width: '100%'}, 250);
				$this.find('.' + Sets.FirstLevel.Hover).stop(true).css('top', 18).delay(250).animate({top: 0}, 150);
			},
			FirstLevelOff = function(element){
				var $this = element;
				
				if($this.hasClass(GS.Active))
					return;
				
				$this.find('.' + Sets.FirstLevel.BackGround).animate({top: 18}, 200);
				$this.find('.' + Sets.FirstLevel.Hover).animate({top: 18}, 200);
			},
			ShowDDMenu = function(element){
				if(!element.has('ul'))
					return;
				
				var box = element.children('ul').attr('style', ''),
					items = box.children('li').attr('style', ''),
					height = box.height(),
					length = items.length,
					time = 600;
				
				box.stop(true).css({display: 'block', height: 0}).animate({height: height}, time);
				items.stop(true).hide().each(function(i){
					$(this).delay(600 / length * ++i).fadeTo(200, 1);
				});
			},
			HideDDMenu = function(element){
				if(!element.has('ul'))
					return;

				var box = element.children('ul'),
					height = box.height(),
					items = box.children('li'),
					length = items.length,
					time = 600;
				
				box.stop(true).slideUp(time + 200);
				items.stop(true).each(function(i){
					$(this).delay(600 / length * (length - ++i)).fadeOut(200);
				});
			},
			SecondLevelEnter = function(){
				var $this = $(this);

				SecondLevelOn($this.addClass(GS.Hover));
				ShowDDMenu($this);
			},
			SecondLevelLeave = function(){
				var $this = $(this);

				SecondLevelOff($this.removeClass(GS.Hover));
				HideDDMenu($this);
			},
			SecondLevelOn = function(element){
				if(element.hasClass(GS.Active))
					return;

				element.find('.arrow').stop().css({opacity: 0, right: -4}).animate({right: 4, opacity: 1}, 300);
				element.find('.text').stop().css({left: 4, opacity: 1}).animate({left: '100%', opacity: 0}, 150, function(){
					$(this).css({left: -118, opacity: 1}).animate({left: 4}, 150);
				});
				element.stop(true).animate({backgroundColor: '#cae7eb', opacity: 1}, 300);
			},
			SecondLevelOff = function(element){
				if(element.hasClass(GS.Active))
					return;

				element.find('.arrow').stop().animate({right: -4, opacity: 0}, 300);
				element.stop(true).animate({backgroundColor: '#5dc5d4', opacity: 1}, 300);
			},
			AutoChange = function(path){
				var NewLinks = Objects.FirstLevel.has('a[href$="' + path + '"]'),
					OldLinks = Objects.FirstLevel.filter('.' + GS.Active).not(NewLinks);
				
				OldLinks.each(function(){
					var $this = $(this);
					
					$this.removeClass(GS.Active);
					FirstLevelOff($this);
				});
				
				NewLinks.each(function(){
					var $this = $(this);
					if(!$this.hasClass(GS.Hover))
						FirstLevelOn($this);
					$this.addClass(GS.Active);
				});
				
				var NewLinks = Objects.SecondLevel.has('a[href$="' + path + '"]'),
					OldLinks = Objects.SecondLevel.filter('.' + GS.Active).not(NewLinks);
				
				OldLinks.each(function(){
					var $this = $(this);
					
					$this.removeClass(GS.Active);
					SecondLevelOff($this);
				});
				
				NewLinks.each(function(){
					var $this = $(this);
					if(!$this.hasClass(GS.Hover))
						SecondLevelOn($this);
					$this.addClass(GS.Active);
				});
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);

				ReDom();
				Objects.FirstLevel.bind({mouseenter: FirstLevelEnter, mouseleave: FirstLevelLeave});
				Objects.SecondLevel.bind({mouseenter: SecondLevelEnter, mouseleave: SecondLevelLeave});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			AutoChange: AutoChange
		};
	})(),
	CategoriesMenu: (function(){
		var GETTER = {
				Start: '.services_menu',
				Item: 'li',
				Link: 'a',
				Image: '.image',
				Video: '.video',
				Shadow: '.shadow',
				Description: '.description'
			},
			Objects = {},
			StartHide = function(){
				Objects.Start.hide();
			},
			StartShow = function(){
				Objects.Start.fadeIn(400);
			},
/*
			ReDom = function(){
				Objects.Description.css({top: 300, display: 'none', opacity: 0});
			},
			Enter = function(){
				var index = Objects.Item.index($(this));
				
				Objects.Image.eq(index).stop(true).fadeOut(400);
				Objects.Description.eq(index).stop(true).css({display: 'block'}).animate({top: 255, opacity: 1}, 400);
			},
			Leave = function(){
				var index = Objects.Item.index($(this));
				
				Objects.Image.eq(index).stop(true).fadeTo(400, 1);
				Objects.Description.eq(index).stop(true).animate({top: 300, opacity: 0}, 400, function(){
					$(this).css({display: 'none'});
				});
			},
*/
			ReDom = function(){
				Objects.Description
					.each(function(){
						$(this).data('height', $(this).height());
					})
					.data('padding', parseInt(Objects.Description.css('paddingTop')))
					.css({height: 0, paddingTop: 0, paddingBottom: 0, display: 'block'}).children()
						.css({opacity: 0});
			},
			Enter = function(){
				var $this = $(this),
					index = Objects.Item.index($this),
					Link = Objects.Link.eq(index),
					Img = Objects.Image.eq(index),
					Description = Objects.Description.eq(index),
					Video = Objects.Video.eq(index),
					Text = Description.children(),
					height = Description.data('height'),
					padding = Description.data('padding');
				
				if($this.hasClass(GS.Active))
					Link.animate({backgroundColor: '#fff'}, 400);
				
				Img.stop(true).fadeOut(400, function(){
					Video.stop(true).fadeTo(200, 1).video('play', function(){
						if($this.hasClass(GS.Active))
							Link.animate({backgroundColor: '#ebebeb'}, 400);
						Video.fadeOut();
						Img.fadeTo(400, 1);
					});
				});
				Text.stop(true);
				
				if(Description.height() != height){
					Text.delay(300).animate({opacity: 1}, 200);
					Description.stop(true).animate({height: height, paddingTop: padding, paddingBottom: padding}, 300);
				}
				Text.animate({opacity: 1}, 200);
			},
			Leave = function(){
				var $this = $(this),
					index = Objects.Item.index($this),
					Link = Objects.Link.eq(index),
					Description = Objects.Description.eq(index),
					Text = Description.children(),
					Video = Objects.Video.eq(index);

				if($this.hasClass(GS.Active))
					Link.animate({backgroundColor: '#ebebeb'}, 400);
				
				Video.video('stop').stop(true).fadeOut(400, function(){
					Objects.Image.eq(index).stop(true).fadeTo(500, 1);
				});
				
				Text.stop(true);
				Description.stop(true);
				
				if(Math.ceil(Text.css('opacity')))
					Text.animate({opacity: 0}, 200, function(){
						Description.stop(true).animate({height: 0, paddingTop: 0, paddingBottom: 0}, 300);
					});
				else
					Description.stop(true).animate({height: 0, paddingTop: 0, paddingBottom: 0}, 300);
			},
			On = function(element){
				var index = Objects.Item.index(element);
				Objects.Link.eq(index).animate({backgroundColor: '#ebebeb'}, 400);
				Objects.Shadow.eq(index).fadeTo(400, 1, function(){
					element.addClass(GS.Active);
				});
			},
			Off = function(element){
				var index = Objects.Item.index(element);
				Objects.Link.eq(index).animate({backgroundColor: '#ffffff'}, 400);
				Objects.Shadow.eq(index).fadeOut(400, function(){
					element.removeClass(GS.Active);
				});
			},
			AutoChange = function(catId){
				var NewLinks = Objects.Item.filter(function(){
						return $(this).data('cat') == catId;
					}),
					OldLinks = Objects.Item.filter('.' + GS.Active).not(NewLinks);

				OldLinks.each(function(){
					Off($(this));
				});
				
				NewLinks.each(function(){
					On($(this));
				});
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				ReDom();
				
				Objects.Item.each(function(i){
					var link = Objects.Link.eq(i);
					$(this).data('cat', ak.GetCatId(link.attr('href')));
				});
				Objects.Item.bind({mouseenter: Enter, mouseleave: Leave});
				Objects.Video.video({size: -3});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			AutoChange: AutoChange
		};
	})(),
	SlideArrows: (function(){
		var GETTER = {
				Start: '.rounded_bg:first',
				Arrow: ' > .slide_controll',
				Target: '.services_inner_menu'
			},
			Objects = {},
			AppSets = {
				Blocked: true
			},
			StartHide = function(){
				var prev = Objects.Arrow.filter('.prev'),
					next = Objects.Arrow.filter('.next'),
					width = prev.width();
				
				prev.css({left: -width});
				next.css({right: -width});
			},
			StartShow = function(){
				var prev = Objects.Arrow.filter('.prev'),
					next = Objects.Arrow.filter('.next');
				
				prev.show().animate({left: 0, width: '+=10'}, 300).animate({width: '-=10'}, 150);
				next.show().animate({right: 0, width: '+=10'}, 300).animate({width: '-=10'}, 150);
				
				setTimeout(function(){
					AppSets.Blocked = false;
				}, 150);
			},
			Enter = function(){
				if(!AppSets.Blocked)
					$(this).stop().fadeTo(300, 0.6);
			},
			Hide = function(){
				var prev = Objects.Arrow.filter('.prev'),
					next = Objects.Arrow.filter('.next'),
					width = prev.width();
				
				prev.animate({left: -width}, 400, function(){
					prev.hide();
				});
				next.animate({right: -width}, 400, function(){
					next.hide();
				});
				AppSets.Blocked = true;
			},
			Show = function(){
				var prev = Objects.Arrow.filter('.prev'),
					next = Objects.Arrow.filter('.next'),
					width = prev.width();
				
				prev.show().animate({left: 0, width: '+=10'}, 300).animate({width: '-=10'}, 150);
				next.show().animate({right: 0, width: '+=10'}, 300).animate({width: '-=10'}, 150);
				setTimeout(function(){
					AppSets.Blocked = false;
				}, 150);
			},
			Leave = function(){
				if(!AppSets.Blocked)
					$(this).stop().fadeTo(300, 0.4);
			},
			Click = function(){
				var items = Objects.Target.find('li'),
					activeIndex = items.index(items.filter('.' + GS.Active)),
					length = items.length,
					direction = $(this).hasClass('prev') ? -1 : 1,
					newIndex = (length + (activeIndex + direction) % length) % length;
				
				items.eq(newIndex).find('a').click();
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);

				Objects.Arrow.bind({mouseenter: Enter, mouseleave: Leave, click: Click});
			};
		return {
			Init: Init,
			Hide: Hide,
			Show: Show,
			StartHide: StartHide,
			StartShow: StartShow
		};
	})(),
	ServicesMenu: (function(){
		var GETTER = {
				Start: '.services_inner_menu',
				Module: 'ul',
				Item: 'li'
			},
			Objects = {},
			Sets = {
				Simple: 'simple',
				Active: 'active',
				Hover: 'hover',
				Icon: 'icon',
				Text: 'text'
			},
			AppSets = {
				Blocked: true,
				TimeHide: null,
				TimeRequired: null
			},
			StartHide = function(){
				Objects.Item.each(function(){
					var $this = $(this).css({opacity: 0});
					
					$this.find('.' + Sets.Text).css({top: 130, opacity: 0});
				});
			},
			StartShow = function(){
				Objects.Item.each(function(i){
					$(this).delay(100 * i).animate({opacity: 1}, 300, function(){
						$(this).find('.' + Sets.Text).animate({top: 108, opacity: 1}, 200);
					});
				});
				setTimeout(function(){
					AppSets.Blocked = false;
				}, Objects.Item.length * 100 + 400);
			},
			Hide = function(){
				var module = Objects.Module;
				Objects.Item.each(function(i){
					$(this).delay(100 * i).animate({opacity: 0}, 300);
				});
				setTimeout(function(){
					module.remove();
					AppSets.Blocked = true;
				}, Objects.Item.length * 100 + 300);
				AppSets.TimeRequired = Objects.Item.length * 100 + 200;
				AppSets.TimeHide = $.now();
			},
			Show = function(element){
				var TimeEnd = $.now(),
					Timer = AppSets.TimeRequired - (TimeEnd - AppSets.TimeHide);
				element.hide();
				
				Objects.Item.remove();
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				ReDom();
				StartHide();

				Objects.Item.bind({mouseenter: Enter, mouseleave: Leave});
				
				setTimeout(function(){
					element.show();
					StartShow();
				}, Timer < 0 ? 0 : Timer);
			},
			ReDom = function(){
				Objects.Item.find('.' + Sets.Hover).hide();
			},
			Construct = function(){
				Objects.Start.animate({height: 150, marginTop: 40}, 400);
			},
			Distruct = function(){
				Objects.Start.animate({height: 0, marginTop: 30}, 400);
			},
			Enter = function(){
				if(AppSets.Blocked)
					return;
				
				$(this).find('.' + Sets.Hover).stop().fadeTo(250, 1);
			},
			Leave = function(){
				if(AppSets.Blocked)
					return;
				
				$(this).find('.' + Sets.Hover).stop().css('display', 'block').fadeOut(250, function(){
					$(this).removeAttr('style').hide();
				});
			},
			On = function(element){
				element.addClass(GS.Active).find('.' + Sets.Active).hide().fadeTo(400, 1);
			},
			Off = function(element){
				element.removeClass(GS.Active).find('.' + Sets.Active).fadeOut();
			},
			AutoChange = function(path){
				var NewLinks = Objects.Item.has('a[href$="' + path + '"]'),
					OldLinks = Objects.Item.filter('.' + GS.Active).not(NewLinks);
				
				Off(OldLinks);
				
				On(NewLinks);
			},
			ModuleChange = function(){
				ak.RegisterModules('services', Hide, Show);
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				ReDom();
				
				Objects.Item.bind({mouseenter: Enter, mouseleave: Leave});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			Hide: Hide,
			Construct: Construct,
			Distruct: Distruct,
			AutoChange: AutoChange,
			ModuleChange: ModuleChange
		};
	})(),
	FooterMenu: (function(){
		var GETTER = {
				Start: '.footer_level',
				Block: '.column',
				Item: 'li'
			},
			Objects = {},
			AppSets = {
				Blocked: true
			},
			StartHide = function(){
				Objects.Block.find('.head').css('opacity', 0);
				Objects.Block.find('li').hide();
			},
			StartShow = function(){
				Objects.Block.each(function(i){
					var $this = $(this);
					
					$this.find('.head').delay(400 * i).animate({opacity: 1}, 300);
					$this.find('li').each(function(j){
						$(this).delay(400 * i + 150 * ++j).fadeIn(150);
					});
				});
				setTimeout(function(){
					AppSets.Blocked = false;
				}, 1500);
			},
			ReDom = function(){
				Objects.Block.find('a').each(function(){
					var $this = $(this),
						text = $this.text();
					if($this.has('.active').length)
						$this.append('<span>' + text + '</span>');
					else
						$this.append('<span class="active">' + text + '</span>');
				});
			},
			Enter = function(){
				var $this = $(this);
				if(AppSets.Blocked || $this.hasClass(GS.Active))
					return;
				
				On($this.addClass(GS.Hover));
			},
			Leave = function(){
				var $this = $(this);
				if(AppSets.Blocked || $this.hasClass(GS.Active))
					return;
				
				Off($this.removeClass(GS.Hover));
			},
			On = function(element, auto){
				element.find('span.active').hide().fadeTo(300, 1);
			},
			Off = function(element, auto){
				element.find('span.active').fadeOut(300);
			},
			AutoChange = function(path){
				var NewLinks = Objects.Item.has('a[href$="' + path + '"]'),
					OldLinks = Objects.Item.filter('.' + GS.Active).not(NewLinks);
				
				OldLinks.each(function(){
					Off($(this).removeClass(GS.Active));
				});
				
				NewLinks.each(function(){
					var $this = $(this);
					if(!$this.hasClass(GS.Hover))
						On(NewLinks);
					$this.addClass(GS.Active);
				});
			},
			Init = function(){
				Objects.Start = $(GETTER.Start);
				for(var name in GETTER)
					if(name != 'Start')
						Objects[name] = Objects.Start.find(GETTER[name]);
				
				ReDom();
				Objects.Item.bind({mouseenter: Enter, mouseleave: Leave});
			};
		return {
			Init: Init,
			StartHide: StartHide,
			StartShow: StartShow,
			AutoChange: AutoChange
		};
	})(),
	BackToTop: (function(){
		var GETTER = {
				Item: '.back_to_top',
				Target: 'body, html'
			},
			Objects = {},
			StartHide = function(){
				Objects.Item.hide();
			},
			StartShow = function(){
				Objects.Item.fadeIn();
			},
			ToTop = function(){
				Objects.Target.animate({scrollTop: 0}, 400);
			},
			Init = function(){
				for(var name in GETTER)
					Objects[name] = $(GETTER[name]);
				
				Objects.Item.bind('click', ToTop);
			};
		return {
			StartHide: StartHide,
			StartShow: StartShow,
			Init: Init
		}
	})()
};