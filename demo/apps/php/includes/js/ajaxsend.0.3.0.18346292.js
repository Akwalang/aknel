// JavaScript Document
var akAjax = {
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
			if(!akHistory.pushState){
				if(akAjax.states.now)
					akHistory.detectHash = akHistory.DetectHash();
				else
					clearInterval(akHistory.detectHash);
			}
			this.now = !this.now;
		},
		start: false,
		Start: function(){
			this.start = true;
		}
	},
	PreventSame: function (address){
		address.indexOf('?') != -1 ? address = address.slice(address.indexOf('?') + 1): address = '';
		if(akHistory.pushState){
			var thisSearch = window.location.search.slice(1);
			if(address == thisSearch)
				return true;
		}
		else{
			var thisHash = window.location.hash.slice(1);
			var thisSearch = window.location.search.slice(1);
			if(thisSearch == '')
				thisSearch = 'start';
			if(address == '')
				address = 'start';
			if(address == thisHash || (address == thisSearch && thisHash == ''))
				return true;
		}
		return false;
	},
	ChinkLink: function(address){
		var QMindex = address.indexOf('?');
		var ajax = new Array();
		ajax['address'] = address;
		if(QMindex != -1){
			ajax['file'] = address.slice(0 , QMindex);
			ajax['data'] = address.slice(QMindex + 1 , address.length);
			ajax['sendData'] = ajax['data'] + '&ajax=' + akAjax.dataType;
		}
		else{
			ajax['file'] = address;
			ajax['data'] = '';
			ajax['sendData'] = 'ajax=' + akAjax.dataType;
		}
		return ajax;
	},
	SuccessSend: function(){
		akAjax.time.complite = new Date().getTime();
		setTimeout(function(){
			akAjax.AjaxEnd();
			akTemplate.SuccessSend();
		}, akAjax.time.Out());
	},
	AjaxEnd: function(){
		jQuery.favicon(akAjax.returnData.favicon);
		document.title = akAjax.returnData.title;
		$('<div class="ajax_loader"></div>').html(akAjax.returnData.content).prependTo(akAjax.contentScene);
		setTimeout(function(){
			akAjax.states.Now();
			akHistory.synchronizedSearch();
		}, akTemplate.states.transformate ? templSets[akTemplate.current].construct : templSets[akTemplate.current].change.end);
	},
	Request: function(thisLink){
		var address = $(this).attr('href');
		if(akDefinder.Ajax(address)){
			thisLink.preventDefault();
			if(akAjax.PreventSame(address) || akAjax.states.now)
				return;
			var ajax = akAjax.Send(address);
			akHistory.Update(ajax);
		}
	},
	Send: function(address){
		akAjax.states.Now();
		akAjax.time.start = new Date().getTime();
		var ajax = akAjax.ChinkLink(address);
		akHistory.updateSearch(ajax);
		akTemplate.BeforeSend(ajax);
		$.ajax({
			url			: ajax['file'],
			data		: ajax['sendData'],
			async		: true,
			dataType	: akAjax.dataType,
			type		: 'POST',
			processData	: false,
			success		: function(data){
								akAjax.returnData = data;
								akAjax.SuccessSend();
								akHistory.currentSearch = ajax['data'];
							},
			error		: function(){
								if(typeof ajaxError == 'function')
									ajaxError();
							},
			complete	: function(){
							}
		});
		return ajax;
	},
	Init: function(){
		this.contentScene = $('.ajax_loader').parent('div');
		$('a').live('click', akAjax.Request);
	}
};
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
var akHistory = {
	Update: function(array){
		if($.browser.msie){
			akHistory.documentBody.append('<a name=' + array['data'] + ' class="fictiveAnchor"></a>');
		}
		if(akHistory.pushState){
			history.pushState(null, null, array['address']);
		}
		else{
			akAjax.states.Start();
			if(array['data'] == '')
				array['data'] = 'start';
			akHistory.currentHash = array['data'];
			window.location.hash = array['data'];
		}
		if($.browser.msie){
			$('.fictiveAnhcor').remove();
		}
	},
	OnChangeHash: function(){
		if(akHistory.currentHash != window.location.hash.slice(1) && akAjax.states.start){
			akHistory.AjaxFromHash();
		}
	},
	DetectHash: function(){
		return setInterval(function(){
					akHistory.OnChangeHash();
				}, 150);
	},
	AjaxFromHash: function(){
		akHistory.currentHash = window.location.hash.slice(1);
		var hash = akHistory.currentHash;
		if(hash == '')
			hash = window.location.search.slice(1);
		if(hash == 'start' || hash == '')
			hash = '';
		else
			hash = '?' + hash;
		if(akAjax.states.now)
			return;
		akAjax.Send(window.location.pathname + hash);
	},
	updateSearch: function(array){
		if(akHistory.pushState)
			akHistory.currentSearch = array['data'];
	},
	synchronizedSearch: function(){
		if(akHistory.pushState){
			var windowSearch = (window.location.search == '')?'':window.location.search.slice(1);
			if(akHistory.currentSearch != windowSearch){
				akHistory.currentSearch = window.location.search;
				akAjax.Send(window.location.pathname + window.location.search);
			}
		}
	},
	Init: function(){
		if(window.history && history.pushState){
			akHistory.pushState = true;
			akHistory.currentSearch = window.location.search;
		}
		else{
			akHistory.pushState = false;
			akHistory.detectHash;
			akHistory.currentHash = window.location.hash;
			akHistory.documentBody = $('body');
		}
		$(window).load(function(){
			if(akHistory.pushState){
				window.addEventListener("popstate", function(e) {
					if(akAjax.states.now)
						return;
					if(akAjax.states.start){
						akAjax.Send(location.href);
					}
					else
						akAjax.states.Start();
				}, false);
			}
			else{
				if(akHistory.currentHash.indexOf('#') != -1)
					akHistory.currentHash = akHistory.currentHash.slice(1);
					
				var needChange = true;
				if(akHistory.currentHash == window.location.search.slice(1))
					needChange = false;
				if(akHistory.currentHash == 'start' && window.location.search.slice(1) == '')
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
};
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
var akTemplate = {
	previous: '',
	current: '',
	states: {
		transformate: false,
	},
	PageType: function(address){
		address.lastIndexOf('/') != -1 ? address = address.slice(address.lastIndexOf('/') + 1): address = address;
		for(var template in TaL){
			if(typeof(TaL[template])=='object' && (TaL[template] instanceof Array)){
				var linksString = '|' + TaL[template].join('|') + '|';
				if(linksString.indexOf('|' + address + '|') != -1){
					return template;
				}
			}
		}
		return TaL.defaultTemplate;
	},
	MenuChange: function(search){
		if(typeof templates.MenuChange == 'function')
			templates.MenuChange(search);
	},
	BeforeSend: function(array){
		this.previous = this.current;
		this.current = akTemplate.PageType(array['address']);
		akTemplate.MenuChange(array['data']);
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
	StartAnimateion: function(){
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
		templates.Init(akTemplate.current);
		if(akHistory.pushState)
			this.current = this.PageType(window.location.search);
		else{
			if(akHistory.currentHash.indexOf('#') == -1)
				this.current = this.PageType(window.location.search);
			else{
				var hash = akHistory.currentHash.slice(1);
				if(hash == 'start')
					hash = '';
				this.previous = this.PageType(window.location.search);
				this.current = this.PageType(hash);
			}
		}
		akTemplate.StartAnimateion();
	}
};
function Aknel(){
	$(function(){
		akDefinder.Init();
		akAjax.Init();
		akHistory.Init();
		akTemplate.Init();
	});
};
Aknel();