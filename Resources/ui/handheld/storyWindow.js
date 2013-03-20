var commonWindow = require('ui/handheld/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow();
	 
	
	
	var storyButton = Titanium.UI.createButton({
		borderRadius:10,
		//backgroundColor :'#003569',
		backgroundImage: '/images/iphoneImage/storyButton.png',
		height:getImageByFileName('/images/iphoneImage/storyButton.png').height/2,
		width:getImageByFileName('/images/iphoneImage/tequilaButton.png').width/2,
		top : 10,
	});
	
	var whyButton = Titanium.UI.createButton({
		borderRadius:10,
		//backgroundColor :'#003569',
		backgroundImage: '/images/iphoneImage/whyUseButton.png',
		height:getImageByFileName('/images/iphoneImage/tequilaButton.png').height/2,
		width:getImageByFileName('/images/iphoneImage/tequilaButton.png').width/2,
		top : 10+getImageByFileName('/images/iphoneImage/tequilaButton.png').height/2+10,
	});
	
	var tequilaButton = Titanium.UI.createButton({
		borderRadius:10,
		//backgroundColor :'#003569',
		backgroundImage: '/images/iphoneImage/tequilaButton.png',
		height:getImageByFileName('/images/iphoneImage/tequilaButton.png').height/2,
		width:getImageByFileName('/images/iphoneImage/tequilaButton.png').width/2,
		top : 10+getImageByFileName('/images/iphoneImage/tequilaButton.png').height+20,
	});
	self.add(storyButton);
	self.add(whyButton);
	self.add(tequilaButton);
	return self;
};

module.exports = storyWindow;
