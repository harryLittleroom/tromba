var commonWindow = require('ui/handheld/ApplicationWindow');


function recommendWindow() {
	var self = new commonWindow();
	self.index = 2;
	var recoText = Ti.UI.createImageView({
		image:'/images/iphoneImage/recoText.png',
		height : getImageByFileName('/images/iphoneImage/recoText.png').height / 2,
		width : getImageByFileName('/images/iphoneImage/recoText.png').width / 2,
		top:50
	});
	var recoButton = Ti.UI.createButton({
		height : getImageByFileName('/images/iphoneImage/recoButton.png').height / 2,
		width : getImageByFileName('/images/iphoneImage/recoButton.png').width / 2,
		backgroundImage:'/images/iphoneImage/recoButton.png',
		top:getImageByFileName('/images/iphoneImage/recoText.png').height-70
	});
	
	recoButton.addEventListener('click',function(){
		var emailDialog = Ti.UI.createEmailDialog()
		emailDialog.subject = "Bartender recommendation";
		emailDialog.toRecipients = ['harry@littleroom.ca'];
		emailDialog.messageBody = 'This bartender has a great Tromba recipe!';
		emailDialog.open();
	})

	self.add(recoText);
	self.add(recoButton);
	return self;
};

module.exports = recommendWindow;
