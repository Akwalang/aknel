// JavaScript Document

(function($){
	$.fn.video = (function(){
		
		var Factory = function(){
				var func = arguments[0],
					sets = arguments[1];
								
				if(typeof arguments[0] == 'object' || !arguments.length){
					func = 'init';
					sets = arguments[0];
				}
				
				if(typeof Actions[func] == 'function')
					this.each(function(){
						Actions[func]($(this), sets);
					});
				
				return this;
			},
			Store = {
				Get: function(elem){
					return Store[elem.data('key')];
				},
				Set: function(elem, data){
					Store[elem.data('key')] = data;
				}
			},
			Actions = {
				init: function(elem, sets){
					var key = $.now().toString() + (Math.random()).toFixed('3') * 1000;
					
					elem.data('key', key);
					
					var obj = {},
						img = $('<img />');
					
					obj.fps = 25;
					obj.size = 0;
					obj.current = 0;
					
					for(var name in sets)
						obj[name] = sets[name];
					
					obj.width = elem.width();
					obj.height = elem.height();
					
					obj.src = /\("?([^\")]+)"?\)/.exec(elem.css('backgroundImage'))[1];
					
					img.bind('load', function(){
						obj.iWidth = img[0].width;
						obj.iHeight = img[0].height;
						
						obj.cols = obj.iWidth / obj.width;
						obj.rows = obj.iHeight / obj.height;
						
						if(obj.size < 1)
							obj.size += obj.cols * obj.rows;
						
						Store.Set(elem, obj);
					}).attr('src', obj.src); // ie-fix
				},
				play: function(elem, callback){
					var obj = Store.Get(elem);
					obj.callback = callback;
					if(obj.size){
						Actions.stop(elem);
						obj.Interval = setInterval(function(){
							Actions.move(elem);
						}, 1000 / obj.fps);
					}
				},
				stop: function(elem){
					var obj = Store.Get(elem);
					clearInterval(obj.Interval);
					obj.current = 0;
				},
				move: function(elem){
					var col, row,
						obj = Store.Get(elem);
					
					if(++obj.current == obj.size){
						obj.callback();
						return Actions.stop(elem);
					}
					col = obj.current % obj.cols;
					row = Math.floor(obj.current / obj.cols);
					
					elem.css('backgroundPosition', '-' + (obj.width * col) + 'px ' + '-' + (obj.height * row) + 'px');
				}
			};
			
		return Factory;
	})();
})(jQuery);