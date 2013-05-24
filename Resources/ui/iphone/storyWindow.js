var commonWindow = require('ui/iphone/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 0;
	self.backgroundColor='#2b2b2b';
	var titleView = Ti.UI.createView({
		backgroundColor:'#706f73',
		height:50,
		width:'auto',
		top:0,
	});
	var label = Ti.UI.createLabel({
		color:'white',
		text:'The Tromba Story',
		font: {fontSize:28},
	});
	
	titleView.add(label);
	
	var topImageView = Ti.UI.createImageView({
		image:'/images/iphoneimage/our_story_topimage.png',
		top:titleView.height,
		height:'auto',
		width:'auto'
	});
	
	console.log(topImageView.toImage().height);
	console.log(getImageByFileName("/images/iphoneImage/our_story_topimage.png").height);
	
	var descrptionView = Ti.UI.createLabel({
		text: 'A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label,A simple label',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: getImageByFileName("/images/iphoneImage/our_story_topimage.png").height*platformWidth/getImageByFileName("/images/iphoneImage/our_story_topimage.png").width+titleView.height,
		color: 'white',
	})
	
	self.add(topImageView);
	self.add(titleView);
	self.add(descrptionView);
	return self;
};

module.exports = storyWindow;
