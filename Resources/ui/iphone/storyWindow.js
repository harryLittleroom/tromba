var commonWindow = require('ui/iphone/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 0;
	self.backgroundColor = '#2b2b2b';
	
	var titleView = addTitleBar('baba', self);

	var topImageView = Ti.UI.createImageView({
		image : '/images/iphoneimage/our_story_topimage.png',
		top : titleView.height,
		height : 'auto',
		width : 'auto'
	});

	var descrptionView = Ti.UI.createLabel({
		text : 'A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label',
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		top : getImageByFileName("/images/iphoneImage/our_story_topimage.png").height * platformWidth / getImageByFileName("/images/iphoneImage/our_story_topimage.png").width + titleView.height,
		color : 'white',
	})

	self.add(topImageView);
	self.add(descrptionView);
	return self;
};

module.exports = storyWindow;
