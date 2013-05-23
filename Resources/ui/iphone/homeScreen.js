var commonWindow = require('ui/iphone/ApplicationWindow');

function homeScreen(commonProperties) {
	var self = new commonWindow();
	self.index = 0;
	self.backgroundImage ='/images/iphoneImage/splashScreen.jpg'
	return self;
};

module.exports = homeScreen;
