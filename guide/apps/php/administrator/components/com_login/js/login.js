// JavaScript Document

Manager.extend({
	Login: {
		Box: $([]),
		Send: function(event){
			event.preventDefault();
			var $this = $(this),
				that = Manager.fn.Login,
				url = location.hostname + '/' + $this.attr('action'),
				data = $this.serialize();
			Manager.fn.Send(data, url, that.Success);
		},
		Success: function(result){
			var that = Manager.fn.Login;
			if(result.status){
				akFile.GetFiles(result);
				Admin.autorization = true;
				that.Box.fadeOut(400, function(){
					$(this).remove();
					$(result.admin_content).appendTo('body').fadeIn();
				});
				Manager.fn.ReplaceState(Manager.fn.FrontendPath() + '-//-administrator->panel');
			}
			else
				Manager.fn.Error('Не правильно введён логин или пароль')
		},
		Callback: function(responce){
			var that = Manager.fn.Login;
			if(responce.status){
				akFile.GetFiles(responce);
				Admin.autorization = true;
				$(responce.admin_content).appendTo('body').fadeIn();
			}
			else{
				that.Box = $(responce.admin_content);
				that.Box.appendTo('body').fadeIn();
				$('#loginform form').bind('submit', that.Send);
			}
		},
		Init: function(){
			var data = {},
				url = Manager.fn.FrontendPath() + '-//-administrator';
			if((this.Box.length && !this.Box.first().is(':visible')) || !this.Box.length){
				this.Box.remove();
				Manager.fn.Send(data, url, this.Callback, url);
			}
		}
	}
});
Manager.fn.Login.Init();