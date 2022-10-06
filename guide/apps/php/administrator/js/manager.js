// JavaScript Document
(function($){
	var Manager = (function(){
		var Admin,
			Manager = function(){
				if(!Admin)
					Admin = new Manager.fn.Init();
				return Admin;
			};
		Manager.fn = Manager.prototype = {
			constructor: Manager,
			Extend: function(data, obj){
				var len = data.length;
				for(var name in obj)
					data += '&' + name + '=' + obj[name];
				return len ? data : data.slice(1);
			},
			Send: function(data, url, Callback, replaceState){
				var Mthis = this,
					Success = function(responce){
						akFile.GetFiles(responce);
						if(replaceState)
							Manager.fn.ReplaceState(replaceState);
						Callback(responce);
					};
				
				if(typeof data == 'string')
					data = Manager.fn.Extend(data, {ajax: true});
				else if(typeof data == 'object')
					$.extend(data, {ajax: true});
				
				$.ajax({
					url			: url,
					data		: data,
					async		: true,
					dataType	: 'json',
					type		: 'post',
					processData	: true,
					success		: Success,
					error		: Mthis.Error
				});
			},
			FrontendPath: function(){
				var index,
					path = location.pathname;
				if((index = path.indexOf('-//-')) != -1)
					path = path.slice(0, index);
				return 'http://' + location.hostname + path;
			},
			ReplaceState: function(url){
				history.replaceState(null, null, url);
			},
			Error: function(text){
				$('<div>').text(text).addClass('manager_error').appendTo('body').fadeIn(400).delay(2000).fadeOut(400, function(){
					$(this).remove();
				});
			},
			Init: function(){
				this.autorization = false;
//				Manager.fn.CheckAutorization();
				return this;
			}
		};
		/*
		Manager.fn.init.prototype = Manager.fn;
		*/
		Manager.extend = Manager.fn.extend = function(){
			var options, name,
				target = Manager.fn;
			if ((options = arguments[0]) != null)
				for (name in options) 
					if (target[name] !== options[name])
						target[name] = options[name];
		};
		return Manager;
	})();
	window.Admin = Manager();
	window.Manager = Manager;
})(jQuery);