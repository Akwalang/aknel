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
		var type = new Array('.php','.html','.htm','.xml');
		for(i = 0; i < type.length; i++){
			var enterIndex = string.indexOf(type[i]);
			if(enterIndex != -1 && enterIndex + type[i].length == string.length)
				return true;
		}
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
		this.host = this.ClearAddress(window.location.href);
	}
};