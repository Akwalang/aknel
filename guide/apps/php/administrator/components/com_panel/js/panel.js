// JavaScript Document

Manager.extend({
	Panel: {
		Articles: function(){
			var $this = $(this),
				url = $this.attr('href'),
				Callback = function(responce){
					$(responce.admin_content).appendTo('body').fadeIn();
				};
			
			Manager.fn.Send({}, url, Callback, url);
		},
		Init: function(){
			$('#manager-panel-articles').bind('click', Manager.fn.Panel.Articles);
		}
	}
});