// JavaScript Document

(function($, l){

var akDefinder = {
	host: '',
	GetSubmol: function(string, index){
		if(index == 'last')
			var index = string.length - 1;
		else
			var index = parseInt(index);
		return string.charAt(index);
	},
	Trim: function(address, subString, from){
		var enterIndex = address.indexOf(subString);
		if(enterIndex != -1)
			if(from == 'end')
				return address.slice(0, enterIndex);
			else{
				var subLength = subString.length;
				return address.slice(enterIndex + subLength);
			}
		else
			return address;
	},
	GetPath: function(address, saveExt){
		var clined = this.Trim(this.Trim(address.replace(/-\/\/-administrator.*$/gi, ''), 'http://'), l.host);
		if(clined.lastIndexOf(window.pageType) == clined.length - window.pageType.length && !saveExt)
			clined = clined.slice(0, clined.length - window.pageType.length);
		if(clined.charAt(0) != '/')
			clined = '/' + clined;
		return clined;
	},
	ClearAddress: function(address){
		cleared = this.Trim(this.Trim(this.Trim(address, 'http://'), 'www.'), '/', 'end');
		if(this.GetSubmol(cleared , 'last') == '.'){
			cleared = cleared.slice(0, -1);
		}
		return cleared;
	},
	DefineType: function(string){
		if(string == this.host || string == this.host + '.' || string.indexOf('?') != -1 || string.indexOf('#') != -1)
			return true;
		var enterIndex = string.indexOf(window.pageType);
		if(enterIndex != -1 && enterIndex + window.pageType.length == string.length)
			return true;
		return false;
	},
	Ajax: function(linkAddress){
		if(this.GetSubmol(linkAddress, 0) == '/')
			return true;
		else if(linkAddress.indexOf('/') == -1 && linkAddress.indexOf('www.') == -1)
			return this.DefineType(linkAddress);
		else
			if(this.ClearAddress(linkAddress) == this.host)
				return true;
			else
				return false;
	},
	Init: function(){
		this.host = this.ClearAddress(l.href);
	}
},
akAjax = {
	returnData: '',
	dataType: 'json',
	contentScene: '',
	time: {
		start: '',
		complite: '',
		out: '',
		Out: function(){
			if(akTemplate.states.transformate)
				this.out = templSets[akTemplate.previous].distruct - (this.complite - this.start);
			else
				this.out = templSets[akTemplate.current].change.start - (this.complite - this.start);
			if(this.out < 0)
				this.out = 0;
			return this.out;
		}
	},
	states: {
		now: false,
		Now: function(){
			if(!akHistory.pushState)
				if(akAjax.states.now)
					akHistory.detectHash = akHistory.DetectHash();
				else
					clearInterval(akHistory.detectHash);
			this.now = !this.now;
		},
		start: false,
		Start: function(){
			this.start = true;
		}
	},
	PreventSame: function (address, path){
		address = akDefinder.GetPath(address);
		path = akDefinder.GetPath(l.pathname);
		if(akHistory.pushState && address == path)
			return true;
		else{
			var thisHash = akDefinder.GetPath(l.hash.slice(1)),
				thisPath = path;
			if(address == thisHash || (address == thisPath && thisHash == ''))
				return true;
		}
		return false;
	},
	SuccessSend: function(){
		akFile.GetFiles(akAjax.returnData, function(){
			akAjax.time.complite = $.now();
			setTimeout(function(){
				akAjax.AjaxEnd();
				akTemplate.SuccessSend();
			}, akAjax.time.Out());
		});
	},
	AjaxEnd: function(){
		$.favicon(akAjax.returnData.favicon);
		document.title = akAjax.returnData.title;
		$('<div class="ajax_loader ' + akAjax.returnData.loader + '"></div>').html(akAjax.returnData.content).prependTo(akAjax.contentScene);
		setTimeout(function(){
			akAjax.states.Now();
			akHistory.SynchronizedPath();
		}, akTemplate.states.transformate ? templSets[akTemplate.current].construct : templSets[akTemplate.current].change.end);
	},
	Request: function(thisLink){
		var address = $(this).attr('href');
		if(akDefinder.Ajax(address)){
			thisLink.preventDefault();
			if(akAjax.PreventSame(address) || akAjax.states.now)
				return;
			akAjax.Send(address);
			akHistory.Update(address);
		}
	},
	Send: function(address){
		akAjax.states.Now();
		akAjax.time.start = $.now();
		akHistory.updateSearch(address);
		akTemplate.BeforeSend(address);
		$.ajax({
			url			: address,
			data		: 'ajax=true',
			async		: true,
			dataType	: akAjax.dataType,
			type		: 'POST',
			processData	: false,
			success		: function(data){
							  akAjax.returnData = data;
							  akAjax.SuccessSend();
							  akHistory.currentPath = akDefinder.GetPath(address);
						  },
			error		: function(){
							  if(typeof ajaxError == 'function')
								  ajaxError();
						  }
		});
	},
	Init: function(){
		this.contentScene = $('.ajax_loader').parent('div');
		$('a').live('click', akAjax.Request);
	}
},
akHistory = {
	Update: function(address){
		var path = akDefinder.GetPath(address, 1);
		if(akHistory.pushState)
			history.pushState(null, null, address);
		else{
			if($.browser.msie && parseInt($.browser.version) < 8)
				akHistory.documentBody.append('<a name="' + path + '" class="fictiveAnchor"></a>');
				
			akAjax.states.Start();
			akHistory.currentHash = path;
			l.hash = path;
			
			if($.browser.msie && parseInt($.browser.version) < 8)
				$('.fictiveAnchor').remove();
		}
	},
	OnChangeHash: function(){
		if(akHistory.currentHash != l.hash.slice(1))
			akHistory.AjaxFromHash();
	},
	DetectHash: function(){
		return setInterval(function(){
					akHistory.OnChangeHash();
				}, 150);
	},
	AjaxFromHash: function(){
		akHistory.currentHash = l.hash.slice(1);
		var hash = akHistory.currentHash;
		if(hash == ''){
			hash = akDefinder.GetPath(l.href, 1);
		}
		if(akAjax.states.now)
			return;
		akAjax.Send("http://" + l.hostname + hash);
	},
	updateSearch: function(address){
		if(akHistory.pushState)
			akHistory.currentPath = address;
	},
	SynchronizedPath: function(){
		if(akHistory.pushState){
			var windowPath = akDefinder.GetPath(l.href);
			if(akHistory.currentPath != windowPath){
				akHistory.currentPath = windowPath;
				akAjax.Send(l.href);
			}
		}
	},
	Init: function(){
		if(window.history && history.pushState){
			akHistory.pushState = true;
			akHistory.currentPath = akDefinder.GetPath(l.href);
		}
		else{
			akHistory.pushState = false;
			akHistory.detectHash;
			akHistory.currentHash = l.hash;
			akHistory.documentBody = $('body');
		}
		$(window).load(function(){
			if(akHistory.pushState){
				window.addEventListener("popstate", function(e) {
					if(akAjax.states.now)
						return;
					if(akAjax.states.start || $.browser.opera || $.browser.mozilla)
						akAjax.Send(l.href);
					else
						akAjax.states.Start();
				}, false);
			}
			else{
				if(akHistory.currentHash.indexOf('#') != -1)
					akHistory.currentHash = akHistory.currentHash.slice(1);
					
				var needChange = true;
				if(akHistory.currentHash == akDefinder.GetPath(l.href))
					needChange = false;
					
				if(!akAjax.states.start && akHistory.currentHash != '' && needChange){
					akAjax.states.Start();
					setTimeout(function(){
						akHistory.AjaxFromHash();
					}, templSets.showBackground);
				}
				akHistory.detectHash = akHistory.DetectHash();
			}
		});
	}
},
akTemplate = {
	previous: '',
	current: '',
	states: {
		transformate: false
	},
	PageType: function(address){
		address = akDefinder.GetPath(address);
		for(var template in TaL){
			if(typeof(TaL[template])=='object' && (TaL[template] instanceof Array)){
				var linksString = '|' + TaL[template].join('|') + '|';
				if(linksString.indexOf('|' + address + '|') != -1)
					return template;
			}
		}
		return TaL.defaultTemplate;
	},
	MenuChange: function(path){
		if(typeof templates.MenuChange == 'function')
			templates.MenuChange(path);
	},
	BeforeSend: function(address){
		this.previous = this.current;
		this.current = akTemplate.PageType(address);
		address = akDefinder.GetPath(address) + pageType;
		akTemplate.MenuChange(address);
		if(akTemplate.current != akTemplate.previous){
			akTemplate.states.transformate = true;
			templates[akTemplate.previous].distruct();
		}
		else{
			akTemplate.states.transformate = false;
			templates[akTemplate.current].content.hide();
		}
	},
	SuccessSend: function(){
		if(akTemplate.states.transformate){
			templates[akTemplate.current].position();
			templates[akTemplate.current].construct();
		}
		else
			templates[akTemplate.current].content.show();
	},
	StartAnimation: function(){
		if(akHistory.pushState){
			templates[this.current].startHide();
			templates[this.current].startShow();
		}
		else{
			if(this.previous == '' || this.previous == this.current){
				templates[this.current].startHide();
				templates[this.current].startShow();
			}
			else if(this.previous != this.current){
				templates[this.previous].startHide();
				templates[this.current].position();
				templates[this.current].startShow();
			}
		}
	},
	Init: function(){
		if(akHistory.pushState)
			this.current = this.PageType(l.href);
		else{
			if(akHistory.currentHash.indexOf('#') == -1)
				this.current = this.PageType(l.href);
			else{
				var hash = akHistory.currentHash.slice(1);
				this.previous = this.PageType(l.pathname);
				this.current = this.PageType(hash);
			}
		}
		templates.Init(akTemplate.current);
		akTemplate.StartAnimation();
	}
},
akFile = {
//	stackLength: 0,
//	Callback: null,
	loaded: {
		script: [],
		style: []
	},
	selectors: {
		script: 'script',
		style: 'link[rel="stylesheet"]'
	},
	Load: function(type, file){
		if($.inArray(file, this.loaded[type]) != -1)
			return true;
			
		this.loaded[type].push(file);
		
		var elem;
//		this.stackLength++;
		switch(type){
			case 'script':
				elem = $('<script></script>').attr({src: file, type: 'text/javascript', charset: 'utf-8'});
				break;
			case 'style':
				elem = $('<link />').attr({href: file, type: 'text/css', rel: 'stylesheet', charset: 'utf-8'});
				break;
		}
		elem.appendTo('head:first');//.bind('load', this.CheckCallback);
	},
	GetFiles: function(responce, callback){
		var length, i = 0;
		if(responce.scripts)
			for(length = responce.scripts.length; i < length; ){
				this.Load('script', responce.scripts[i++]);
			}
		i = 0;
		if(responce.styles)
			for(length = responce.styles.length; i < length; )
				this.Load('style', responce.styles[i++]);
		if(callback)
			callback();
//		this.CheckCallback();
	},
/*
	CheckCallback: function(){
		console.log(this.stackLength);
		if(!(--this.stackLength))
			this.Callback();
	},
*/
	Init: function(){
		for(var name in this.selectors)
			$(this.selectors[name]).each(function(){
				var $this = $(this);
				akFile.loaded[name].push($this.attr('src') || $this.attr('href'));
			});
	}
},
akHotKey = {
	ControllKeys: function(event){
		var key = String.fromCharCode(event.which).toLowerCase(),
			alt = event.altKey,
			shift = event.shiftKey,
			ctrl = event.ctrlKey;
		switch(key){
			case 'a':
				if(alt && shift && ctrl){
					if(window.Manager && window.Manager.fn.Login)
						Manager.fn.Login.Init();
					else
						akFile.GetFiles({scripts: ['http://' + akDefinder.host + '/administrator/js/manager.js', 'http://' + akDefinder.host + '/administrator/components/com_login/js/login.js'], styles: ['http://' + akDefinder.host + '/administrator/templates/sunshine/css/manager.css']});
				}
				break;
		}
	},
	Init: function(){
		$(document).keydown(this.ControllKeys);
	}
};

$(function(){
	akFile.Init();
	akDefinder.Init();
	akAjax.Init();
	akHistory.Init();
	akTemplate.Init();
	akHotKey.Init();
});

window.akFile = akFile;

})(jQuery, window.location);