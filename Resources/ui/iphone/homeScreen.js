var commonWindow = require('ui/iphone/ApplicationWindow');

function homeScreen(commonProperties) {
	var self = new commonWindow();
	self.index = 4;
	self.backgroundImage ='/images/iphoneImage/splashScreen.jpg'
	console.log(self.height); 
	return self;
};

module.exports = homeScreen;
