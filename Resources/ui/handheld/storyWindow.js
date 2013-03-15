var commonWindow = require('ui/handheld/ApplicationWindow');

function ApplicationWindow(commonProperties) {
	var self = new commonWindow('myTitle');

	return self;
};

module.exports = ApplicationWindow;
