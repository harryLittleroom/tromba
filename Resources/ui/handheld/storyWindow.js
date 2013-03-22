var commonWindow = require('ui/handheld/ApplicationWindow');

function storyWindow(commonProperties) {
	var self = new commonWindow();
	var buttonEvent = function() {
		var newScrollView = new addScrollView();
		self.add(newScrollView);
		self.add(new addBackButton(self, function() {
			self.remove(newScrollView);
		}))
	};

	var createButton = function(backGroundImage, top) {
		var button = Titanium.UI.createButton({
			borderRadius : 10,
			backgroundImage : backGroundImage,
			height : getImageByFileName(backGroundImage).height / 2,
			width : getImageByFileName(backGroundImage).width / 2,
			top : top,
		});
		button.addEventListener('click', function() {
			var winview = Ti.UI.createView({
				//backgroundImage : '/images/iphoneImage/story.png',
				//backgroundColor:'white',
				height : getImageByFileName('/images/iphoneImage/story.png').height * platformWidth / getImageByFileName('/images/iphoneImage/story.png').width,
			});
			var labelArea = Ti.UI.createLabel({
				text: 'A simple label',
			//	backgroundColor:'white',
			});
			
			var labelArea2 = Ti.UI.createLabel({
				text: 'A simple label2',
				//backgroundColor:'white',
				font:{fontFamily: 'Zapfino' },
				top:10
			});
			
			var labelArea3 = Ti.UI.createLabel({
				text: 'A simple label3',
			//	backgroundColor:'white',
				font:{fontFamily: 'uni 05_53' },
				top:60
			})
			
			
			getAppData(function(e){
				myData = JSON.parse(e);
				Ti.API.log(myData.story.tequilaTrutbs.text);
				labelArea.text = myData.story.tequilaTrutbs.text;
				labelArea2.title = myData.story.tequilaTrutbs.title;
				winview.add(labelArea);
				winview.add(labelArea2);
			});
			
			
			//winview.add(labelArea3);
			var newScrollView = new addScrollView();
			newScrollView.add(winview);
			var button = new addBackButton(self, newScrollView, function() {
				self.add(storyButton);
				self.add(whyButton);
				self.add(tequilaButton);
			});
			self.remove(storyButton);
			self.remove(whyButton);
			self.remove(tequilaButton);
			self.add(newScrollView);
		})
		return button
	}
	var storyButton = new createButton('/images/iphoneImage/storyButton.png', 10);
	var whyButton = new createButton('/images/iphoneImage/whyUseButton.png', 10 + getImageByFileName('/images/iphoneImage/tequilaButton.png').height / 2 + 10);
	var tequilaButton = new createButton('/images/iphoneImage/tequilaButton.png', 10 + getImageByFileName('/images/iphoneImage/tequilaButton.png').height + 20);

	storyButton.addEventListener('click', function() {

	});
	self.add(storyButton);
	self.add(whyButton);
	self.add(tequilaButton);
	return self;
};

module.exports = storyWindow;
