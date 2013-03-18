var commonWindow = require('ui/handheld/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow('myTitle');

	return self;
};

module.exports = storyWindow;
