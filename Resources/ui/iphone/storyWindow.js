var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function storyWindow(commonProperties) {
	var data = Data.readTrombData('story');
	console.log(data.description);
	var self = new commonWindow();
	self.index = 0;
	self.backgroundColor = '#2b2b2b';
	var scrollView = new addScrollView();
	var titleView = addTitleBar('baba', self);

	var topImageView = Ti.UI.createImageView({
		image : '/images/iphoneimage/our_story_topimage.png',
		top : titleView.height,
		height : 'auto',
		width : 'auto',
		zIndex : 9
	});

	var descrptionView = Ti.UI.createLabel({
		text : data[0].description,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		top : getImageByFileName("/images/iphoneImage/our_story_topimage.png").height * platformWidth / getImageByFileName("/images/iphoneImage/our_story_topimage.png").width + titleView.height,
		color : 'white',
	})
	scrollView.add(descrptionView);
	self.add(scrollView);
	self.add(topImageView);
	
	return self;
};

module.exports = storyWindow;
