var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow('myTitle');
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')
	var view = Titanium.UI.createView({
		backgroundImage : '/images/iphoneImage/bartenderRow.jpg',
		width : platformWidth,
		height : bartenderImage.height*platformWidth/bartenderImage.width,
		top:self.children[0].height
	});
	self.add(view);

	return self;
};

module.exports = bartendersWindow;
