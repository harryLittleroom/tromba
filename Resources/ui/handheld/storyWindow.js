var commonWindow = require('ui/handheld/storyWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow('myTitle');

	return self;
};

module.exports = storyWindow;
