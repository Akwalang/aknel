// JavaScript Document
var templSets = {
	showBackground: 1000,
	start_page: {
		construct: 1300,
		distruct: 990,
		change: {
			start: 400,
			end: 400
		}
	},
	other_page: {
		construct: 1900,
		distruct: 1900,
		change: {
			start: 1300,
			end: 600
		}
	}
};
var templates = {
	start_page: {
		startHide: function(){
			$(document).ready(function(){
				elements.background.hide();
				elements.menu.hide();
				elements.square.left.startHide();
				elements.siteName.startHide();
				$('.ajax_loader').css('display', 'none');
			});
		},
		startShow: function(){
			$(window).load(function(){
				elements.background.show();
				setTimeout(function(){
					elements.siteName.show();
					setTimeout(function(){
						$('#menu').fadeIn(600, function(){
							elements.menu.show();
						});
					}, 200);
					$('.ajax_loader').fadeIn(400);
					elements.square.left.show();
				}, templSets.showBackground);
			});
		},
		construct: function(){
			elements.square.left.show();
			elements.siteName.show();
			$('#menu').delay(200).fadeIn(600, function(){
				elements.menu.show();
			});
			$('.ajax_loader').css('display', 'none').fadeIn(400);
		},
		distruct: function(){
			elements.square.left.hide();
			$('#logo').animate({'left': 71}, 100).animate({'left': -200}, 300);
			$('#signature').delay(200).animate({'left': 71}, 100).animate({'left': -250}, 300);
			$('#menu').delay(400).animate({'left': -600}, 400);			
			$('.ajax_loader').fadeOut(500, function(){
				$(this).remove();
			});
		},
		position: function(){
			$('#logo_scene').css({'width': '638px', 'height': '60px', 'top': '250px', 'left': '209px'});
			$('#menu_scene').css({'width': '624px', 'height': '78px', 'top': '283px', 'left': '221px'});
			$('#scene_to_position').css({'top': '433px', 'left': '261px'});
			$('#animation_scene').css({'width': '584px', 'height': '215px'});
			$('#content_scene').css({'width': '584px', 'height': '215px'});
			$('.ajax_loader').css({'left': 0, 'top': 0});
			elements.menu.hide();
			elements.siteName.startHide();
			$('#ls1').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls2').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls3').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls4').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls5').css({'width': '99px', 'height': '99px', 'margin-top': '-50px', 'margin-left': '-50px', 'display': 'block'});
			$('#ls6').css({'width': '99px', 'height': '99px', 'margin-top': '-50px', 'margin-left': '-50px', 'display': 'block'});
			$('#ls7').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls8').css({'width': '57px', 'height': '57px', 'margin-top': '-29px', 'margin-left': '-29px', 'display': 'block'});
			$('#ls9').css({'width': '69px', 'height': '69px', 'margin-top': '-35px', 'margin-left': '-35px', 'display': 'block'});
			$('#ls10').css({'width': '96px', 'height': '96px', 'margin-top': '-48px', 'margin-left': '-48px', 'display': 'block'});
			elements.square.left.startHide();
		},
		content: {
			hide: function(){
				$('.ajax_loader').animate({'opacity': 0}, 400, function(){
					$(this).remove();
				});
			},
			show: function(){
				$('.ajax_loader').css({"left": 0, "top": 0}).fadeIn(400);
			}
		}
	},
	other_page: {
		startHide: function(){
			$(document).ready(function(){
				elements.background.hide();
				elements.menu.hide();
				elements.square.right.startHide();
				elements.siteName.startHide();
				$('.ajax_loader').css('left', 621);
			});
		},
		startShow: function(){
			$(window).load(function(){
				elements.background.show();
				setTimeout(function(){
					elements.siteName.show();
					$('#menu').delay(200).fadeIn(600, function(){
						elements.menu.show();
					});
					if(window.location.hash == '' || window.location.hash == '#' || window.location.hash.slice(1) == window.location.search.slice(1)){
						elements.square.content.show();
						setTimeout(function(){
							$('.ajax_loader').animate({'left': 40}, 500);
							elements.square.content.remove();
						}, templSets.other_page.change.start);
					}
					elements.square.right.show();
				}, templSets.showBackground);
			});
		},
		construct: function(){
			$('.ajax_loader').css({'left': 800, 'top': 20});
			elements.square.right.show();
			elements.siteName.show();
			$('#menu').delay(200).fadeIn(600, function(){
				elements.menu.show();
			});
			elements.square.content.show();
			setTimeout(function(){
				templates.other_page.content.show();
			}, templSets.other_page.change.start);
		},
		distruct: function(){
			setTimeout(function(){
				elements.square.right.hide();
			}, 600);
			setTimeout(function(){
				$('#logo').animate({'left': 71}, 100).animate({'left': -200}, 300);
				$('#signature').delay(200).animate({'left': 71}, 100).animate({'left': -250}, 300);
				$('#menu').delay(400).animate({'left': -600}, 300, function(){
					elements.menu.hide();
				});
			}, 800);
			elements.square.content.show();
			templates.other_page.content.hide();
			setTimeout(function(){
				templates.other_page.content.show();
			}, templSets.other_page.change.start);
		},
		position: function(){
			$('#logo_scene').css({'width': '663px', 'height': '60px', 'top': '142px', 'left': '0px'});
			$('#menu_scene').css({'width': '663px', 'height': '78px', 'top': '164px', 'left': '0px'});
			$('#scene_to_position').css({'top': '303px', 'left': '0px'});
			$('#animation_scene').css({'width': '785px', 'height': '405px'});
			$('#content_scene').css({'width': '620px', 'height': '405px'});
			elements.menu.hide();
			elements.siteName.startHide();
		},
		content: {
			hide: function(){
				elements.square.content.show();
				$('.ajax_loader').animate({'opacity': 0},500, function(){
					$(this).remove();
				});
			},
			show: function(){
				$('.ajax_loader').css({'left': 800, 'top': 20}).animate({'left': 40},500);
				elements.square.content.remove();
			}
		}
	},
	MenuChange: function(search){
		elements.menu.auto(search);
	},
	Init: function(page){
		elements.menu.Init();
		elements.banner.Init();
	}
};
var elements = {
	background: {
		stat: false,
		hide: function(){
			$('#content_bg').css('top', 70);
			$('#sp').css('display', 'none');
		},
		show: function(){
			$('#content_bg').animate({'top': 100}, templSets.showBackground)
			$('#sp').fadeIn(templSets.showBackground);
			this.stat = !this.stat;
		} 
	},
	siteName: {
		startHide: function(){
			$('#logo, #signature').css('left', 664);
		},
		show: function(){
			setTimeout(function(){
				$('#logo').animate({'left': 21}, 400).animate({'left': 51}, 300);
			}, 100);
			setTimeout(function(){
				$('#signature').animate({'left': 11}, 400).animate({'left': 51}, 300);
			}, 250);
		}
	},
	square: {
		toggler: function(selector, time, interval){
			var square = $(selector);
			setTimeout(function(){
				if(square.data('toggle')){
					square.fadeTo(time/2, "0.5").fadeTo(time/2, "1");
					elements.square.toggler(selector, time, interval)
				}
			},interval);
		},
		hide: function(selector, time, delay){
			var thisSquare = $(selector);
			var sideSize = parseInt(thisSquare.css('width'));
			var sizeProp = new Array(1.3, 0);
			var timeProp = new Array(0.4, 1);
			thisSquare.delay(delay).stop(true);
			for(var i = 0; i < sizeProp.length; i++){
				var size = sideSize * sizeProp[i];
				var animate = {};
				animate.width = size;
				animate.height = size;
				animate.marginTop = -size/2;
				if(thisSquare.hasClass('left_square'))
					animate.marginLeft = -size/2;
				else if(thisSquare.hasClass('right_square'))
					animate.marginRight = -size/2;
				if(i == sizeProp.length - 1)
					thisSquare.animate(animate, time * timeProp[i], function(){
						thisSquare.css('display', 'none');
					});
				else
					thisSquare.animate(animate, time * timeProp[i]);
			}
			thisSquare.data('toggle', false);
		},
		//********************** RightSquare **********************
		right: {
			startHide: function(){
				$('.right_square').css('display', 'none');
			},
			showOne: function(selector, width, time, delay){
				var thisSquare = $(selector);
				thisSquare.css({'width': 0, 'height': 0, 'display': 'block', 'opacity': 0.01, 'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=1)', 'margin-right': 0, 'margin-top': 0}).delay(delay);
				var sizeProp = new Array(1.2, 0.6, 1.1, 1);
				var timeProp = new Array(1, 1.4, 1.2, 0.7);
				for(var i = 0; i < sizeProp.length; i++){
					var size = width * sizeProp[i];
					var right = size/2;
					var top = size/2;
					thisSquare.animate({
									'margin-right': -right,
									'margin-top': -top,
									'width': size,
									'height': size,
									'opacity': 1,
									'progid:DXImageTransform.Microsoft.Alpha(opacity=1)': 100
								}, time * timeProp[i]);
				}
				thisSquare.data('toggle', true);
			},
			show: function(){
				elements.square.right.showOne('#rs1', 54, 300, 50);
				elements.square.right.showOne('#rs2', 94, 350, 90);
				elements.square.right.showOne('#rs3', 96, 280, 140);
				elements.square.right.showOne('#rs4', 54, 390, 200);
				elements.square.right.showOne('#rs5', 50, 410, 70);
				elements.square.right.showOne('#rs6', 96, 330, 100);
				elements.square.toggler('#rs1', 700, 22300);
				elements.square.toggler('#rs2', 500, 6110);
				elements.square.toggler('#rs3', 700, 10333);
				elements.square.toggler('#rs4', 600, 25285);
				elements.square.toggler('#rs5', 400, 18110);
				elements.square.toggler('#rs6', 800, 32478);
			},
			hide: function(){
				elements.square.hide('#rs1', 400, 300);
				elements.square.hide('#rs2', 500, 200);
				elements.square.hide('#rs3', 350, 250);
				elements.square.hide('#rs4', 370, 100);
				elements.square.hide('#rs5', 430, 0);
				elements.square.hide('#rs6', 510, 150);
			}
		},
		//********************** LeftSquare **********************
		left: {
			hideOne: function(selector, left, top){
				var css = {};
				if(left)
					css.left = left;
				if(top)
					css.top = top;
				if($.browser.msie && parseInt($.browser.version) < 9){
					css.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)';
				}
				else
					css.opacity = 0;
				$(selector).css(css);
			},
			startHide: function(){
				elements.square.left.hideOne('#ls1', 20, false);
				elements.square.left.hideOne('#ls2', 965, false);
				elements.square.left.hideOne('#ls3', 590, 278);
				elements.square.left.hideOne('#ls4', 654, false);
				elements.square.left.hideOne('#ls5', false, 553);
				elements.square.left.hideOne('#ls6', -190, 339);
				elements.square.left.hideOne('#ls7', 3, 168);
				elements.square.left.hideOne('#ls8', false, 122);
				elements.square.left.hideOne('#ls9', 289, 613);
				elements.square.left.hideOne('#ls10', -400, false);
			},
			showOne: function(selector, left, top, time, delay){
				var animated = {};
				if(left)
					animated.left = left;
				if(top)
					animated.top = top;
				animated.opacity = true;
				$(selector).stop(true).delay(delay).animate(animated, time).data('toggle', true);
			},
			show: function(){
				elements.square.left.showOne('#ls1', 315, false, 700, 500);
				elements.square.left.showOne('#ls2', 315, false, 500, 230);
				elements.square.left.showOne('#ls3', 254, 152, 800, 290);
				elements.square.left.showOne('#ls4', 254, false, 650, 620);
				elements.square.left.showOne('#ls5', false, 213, 550, 140);
				elements.square.left.showOne('#ls6', 68, 289, 900, 200);
				elements.square.left.showOne('#ls7', 159, 334, 880, 150);
				elements.square.left.showOne('#ls8', false, 372, 760, 10);
				elements.square.left.showOne('#ls9', 119, 443, 649, 345);
				elements.square.left.showOne('#ls10', 29, false, 534, 280);
				elements.square.toggler('#ls1', 700, 7300);
				elements.square.toggler('#ls2', 400, 3480);
				elements.square.toggler('#ls3', 200, 22364);
				elements.square.toggler('#ls4', 800, 37893);
				elements.square.toggler('#ls5', 450, 15834);
				elements.square.toggler('#ls6', 320, 9890);
				elements.square.toggler('#ls7', 400, 16300);
				elements.square.toggler('#ls8', 200, 12530);
				elements.square.toggler('#ls9', 800, 11000);
				elements.square.toggler('#ls10', 450, 8289);
			},
			hide: function(){
				elements.square.hide('#ls1', 400, 300);
				elements.square.hide('#ls2', 600, 100);
				elements.square.hide('#ls3', 300, 150);
				elements.square.hide('#ls4', 450, 300);
				elements.square.hide('#ls5', 570, 50);
				elements.square.hide('#ls6', 520, 250);
				elements.square.hide('#ls7', 340, 450);
				elements.square.hide('#ls8', 500, 100);
				elements.square.hide('#ls9', 300, 0);
				elements.square.hide('#ls10', 440, 550);
			}
		},
		//********************** ContentSquare **********************
		content: {
			showOne: function(square, width, fromLeft, fromTop, time){
				var startSize = 0;
				var sizeProp = new Array(1, 0.5, 1.25, 1);
				var timeProp = new Array(1, 1.2, 1.2, 0.9);
				var squarPosition = $(square);
				squarPosition.css({'left': fromLeft, 'top': fromTop});
				var square = squarPosition.children('div');
				square.rotate(0);
				square.css({'width': startSize, 'height': startSize, 'margin-left': 0, 'margin-top': 0}).stop(true);
				for(var i = 0; i < sizeProp.length; i++){
					var size = width * sizeProp[i];
					var left = size/2;
					var top = size/2;
					square.animate({
									'margin-left': -left,
									'margin-top': -top,
									'width': size,
									'height': size
								}, time * timeProp[i]);
				}
			},
			show: function(){
				var firstPositionLeft = 120;
				var firstPositionTop = 100;
				$(".text").stop(true).css({"display": "block", "left": 500, "width": "603px"}).animate({"left": 40},700);
				this.showOne('#sq1', 138, firstPositionLeft, firstPositionTop, 350);
				this.showOne('#sq2', 84, firstPositionLeft + 180, firstPositionTop + 10, 320);
				this.showOne('#sq3', 164, firstPositionLeft + 356, firstPositionTop - 10, 370);
				this.showOne('#sq4', 80, firstPositionLeft + 470, firstPositionTop + 30, 260);
				this.showOne('#sq5', 78, firstPositionLeft + 35, firstPositionTop + 135, 250);
				this.showOne('#sq6', 206, firstPositionLeft + 190, firstPositionTop + 141, 270);
				this.showOne('#sq7', 108, firstPositionLeft + 330, firstPositionTop + 120, 340);
				this.showOne('#sq8', 160, firstPositionLeft + 560, firstPositionTop + 145, 280);
			},
			removeOne: function(id, time, delay){
				var thisObj = $('#' + id);
				var child = thisObj.children('div');
				setTimeout(function(){
					thisObj.animate({"left": -200}, time);
					child.rotate({
							angle: 0, 
							animateTo: time
						  });
				}, delay);
			},
			remove: function(){
				var deltaTime = 70;
				elements.square.content.removeOne("sq1", 280, 0);
				elements.square.content.removeOne("sq5", 280, 0);
				elements.square.content.removeOne("sq2", 320, 0.8 * deltaTime);
				elements.square.content.removeOne("sq6", 320, 0.8 * deltaTime);
				elements.square.content.removeOne("sq3", 360, 1.5 * deltaTime);
				elements.square.content.removeOne("sq7", 360, 1.5 * deltaTime);
				elements.square.content.removeOne("sq4", 400, 1.9 * deltaTime);
				elements.square.content.removeOne("sq8", 400, 1.9 * deltaTime);
				$(".text").delay(1.9 * deltaTime + 20).animate({"width": 0},330);
			}
		}
	},
	menu: {
		hide: function(){
			$('#menu').css({'display': 'none', 'left': 40});
			var allMenuItem = $('#menu li');
			allMenuItem.each(function(){
				var thisItem = $(this);
				var index = allMenuItem.index(thisItem);
				var left = 664 - 146 * index;
				thisItem.css('left', left);
			});
		},
		show: function(){
			$('#menu li:nth-child(1)').animate({'left': 0}, 250);
			setTimeout(function(){
				$('#menu li:nth-child(2)').animate({'left': 0}, 250);
			}, 150);
			setTimeout(function(){
				$('#menu li:nth-child(3)').animate({'left': 0}, 250);
			}, 300);
			setTimeout(function(){
				$('#menu li:nth-child(4)').animate({'left': 0}, 250);
			}, 450);
		},
		mouseOver: function(){
			var listItem = $(this).parent('li');
			listItem.addClass('hover');
			if(!listItem.hasClass('active_menu')){
				elements.menu.animate.on(listItem);
			}
		},
		mouseOut: function(){
			var listItem = $(this).parent('li');
			listItem.removeClass('hover');
			if(!listItem.hasClass('active_menu')){
				elements.menu.animate.off(listItem);
			}
		},
		auto: function(search){
			var links = $('#menu a[href*="' + search + '"]');
			elements.menu.animate.off('active_menu')
			$('.active_menu').removeClass('active_menu');
			links.each(function(){
				var listItem = $(this).parent('li');
				if(!listItem.hasClass('hover'))
					elements.menu.animate.on(listItem);
				listItem.addClass('active_menu');
			});
		},
		animate: {
			on: function(listItem){
				if(typeof listItem == 'string')
					listItem = $('.' + listItem);
				listItem.children('.move_text_passive').stop(true).animate({'top': 78}, 300);
				listItem.children('.color_block').stop(true).animate({'height': 0}, 200, function(){
					$(this).css({'top': 'auto','bottom': 0, 'z-index': 102}).animate({'height': 72}, 300);
					listItem.children('.move_text_active').stop(true).animate({'top': 42}, 300).animate({'top': 32}, 180);
				});
			},
			off: function(listItem){
				if(typeof listItem == 'string')
					listItem = $('.' + listItem);
				listItem.children('.move_text_active').stop(true).animate({'top': -20}, 300);
				listItem.children('.color_block').stop(true).animate({'height': 0}, 300, function(){
					$(this).css({'bottom': 'auto','top': 0, 'z-index': 104}).animate({'height': 5}, 200);
					listItem.children('.move_text_passive').stop(true).animate({'top': 22}, 300).animate({'top': 32}, 180);
				});
			}
		},
		Init: function(){
			$('#menu a').live('mouseover', elements.menu.mouseOver);
			$('#menu a').live('mouseout', elements.menu.mouseOut);
			$('#menu a').each(function(){
				$(this).css({'background': '#fff', 'opacity': 0.01, 'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=1)'});
				var text = $(this).children('span').css('display', 'none').text();
				$(this).parent('li').append('<div class="move_text_passive">' + text + '</div>');
				$(this).parent('li').append('<div class="move_text_active">' + text + '</div>');
			})
		}
	},
	banner: {
		on: function(){
			var thisLink = $(this);
			var parent = thisLink.parent('.animate_banner');
			parent.children('*').stop(true);
			parent.children('.ab_bg2').fadeOut(200).fadeIn(200);
			parent.children('.ab_bigtext').animate({'left': -200}, 200).animate({'left': 240}, 0).animate({'left': 80}, 200);
			parent.children('.ab_img').animate({'left': 0}, 200).animate({'left': 10}, 90);
			parent.children('.ab_bg_text').animate({'left': -278}, 100).animate({'left': 278}, 0).animate({'left': 65}, 200);
			var smallText = parent.children('.ab_smalltext');
			smallText.animate({'left': smallText.css('left')}, 60).animate({'left': -200}, 200).animate({'left': 240}, 0).animate({'left': 80}, 200);
		},
		off: function(){
			var thisLink = $(this);
			var parent = thisLink.parent('.animate_banner');
			parent.children('*').stop(true);
			parent.children('.ab_bg2').fadeIn(200);
			parent.children('.ab_bigtext').animate({'left': 280}, 200).animate({'left': -200}, 0).animate({'left': 20}, 200);
			parent.children('.ab_img').animate({'left': 220}, 200, function(){
				$(this).animate({'left': 210}, 200);
				$('.ab_bg2').stop().css('opacity', 1);
			});
			parent.children('.ab_bg_text').animate({'left': 278}, 100).animate({'left': -278}, 0).animate({'left': 0}, 200);
			var smallText = parent.children('.ab_smalltext');
			smallText.animate({'left': smallText.css('left')}, 60).animate({'left': 270}, 200).animate({'left': -200}, 0).animate({'left': 20}, 200);
		},
		Init: function(){
			$('.animate_banner a').live('mouseover', elements.banner.on);
			$('.animate_banner a').live('mouseout', elements.banner.off);
		}
	}
};