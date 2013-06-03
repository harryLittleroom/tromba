var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function storyWindow(commonProperties) {
	var data = Data.readTrombData('story');
	console.log(data.description);
	var self = new commonWindow();
	self.index = 0;
	self.backgroundColor = '#2b2b2b';
	var scrollView = new addScrollView();
	scrollView.width = platformWidth;
	var titleView = addTitleBar('The Tromba Story', self);

	var topImageView = Ti.UI.createImageView({
		image : '/images/iphoneImage/our_story_topimage.png',
		top : titleView.height,
		height : 'auto',
		width : platformWidth,
		zIndex : 9
	});

	var descrptionView = Ti.UI.createLabel({
		text : data[0].description,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		//top : getImageByFileName("/images/iphoneImage/our_story_topimage.png").height * platformWidth / getImageByFileName("/images/iphoneImage/our_story_topimage.png").width + titleView.height,
		color : 'white',
		font:{
			fontSize:12,
			fontFamily : 'Mrs Eaves OT'
		}
	})
	scrollView.add(topImageView);
	scrollView.add(descrptionView);
	self.add(scrollView);
	//self.add(topImageView);
	
	return self;
};

module.exports = storyWindow;
