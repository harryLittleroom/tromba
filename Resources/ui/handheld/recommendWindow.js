var commonWindow = require('ui/handheld/ApplicationWindow');


function recommendWindow() {
	var self = new commonWindow('myTitle');
	return self;
};

module.exports = recommendWindow;
