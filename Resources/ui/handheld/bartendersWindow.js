var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow('myTitle');
	
	var button = Titanium.UI.createButton({
   title: 'Hello',
   top: 20,
   width: 100,
   height: 50,
   zIndex:-1,
	});
	button.addEventListener('click',function(e)
	{
	 	Ti.API.log('this is bartender window');
	 	var win = Titanium.UI.currentWindow; 
	Ti.API.log(win);
	});
	self.add(button);
	
	return self;
};

module.exports = bartendersWindow;
