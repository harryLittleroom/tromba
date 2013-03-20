var commonWindow = require('ui/handheld/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow();

	var createStoryButton = function(backGroundImage, top) {
		var button = Titanium.UI.createButton({
			borderRadius : 10,
			backgroundImage : backGroundImage,
			height : getImageByFileName(backGroundImage).height / 2,
			width : getImageByFileName(backGroundImage).width / 2,
			top : top,
		});
		return button
	}
	var storyButton = new createStoryButton('/images/iphoneImage/storyButton.png', 10);
	var whyButton = new createStoryButton('/images/iphoneImage/whyUseButton.png', 10 + getImageByFileName('/images/iphoneImage/tequilaButton.png').height / 2 + 10);
	var tequilaButton = new createStoryButton('/images/iphoneImage/tequilaButton.png', 10 + getImageByFileName('/images/iphoneImage/tequilaButton.png').height + 20);
	self.add(storyButton);
	self.add(whyButton);
	self.add(tequilaButton);
	return self;
};

module.exports = storyWindow;
