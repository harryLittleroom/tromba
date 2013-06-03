var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function drinksListWindow(navigroup) {
	var data = Data.readTrombData('drinks');
	var self = new commonWindow();
	self.backgroundColor = '#2b2b2b';
	self.index = 1;
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderHeaderBackground.jpg')
	var scrollView = new addScrollView();
	var fontsize = 14;
	var fontFamilySmall = 'Mrs Eaves OT'
	
	for (var i = 0; i < data.length; i++) {
		var view = Titanium.UI.createView({
			backgroundColor:'#2b2b2b',
			width : platformWidth,
			height : bartenderImage.height * platformWidth / bartenderImage.width,
			sourceID : data[i],
			index : i
		});
		
		var labelView = Ti.UI.createView({
			layout:'vertical',
			width:'60%',
			height:Titanium.UI.SIZE,
			right:0,
			sourceID : data[i],
		});
		
		if (i % 2 == 1)view.backgroundColor = '#212121';
			

		
		var nameLabel = Ti.UI.createLabel({
			text : data[i].name,
			font : {
				fontSize : 22,
				fontFamily : fontFamilySmall
				
			},
			color : 'white',
			height : 'auto',
			width : 'auto',
			index : i,
			sourceID : data[i],
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			left:0,
		})

		var barLabel = Ti.UI.createLabel({
			text : data[i].bar,
			font : {
				fontSize : 20,
				fontFamily : fontFamilySmall
			},
			color : 'white',
			height : 'auto',
			width : 'auto',
			sourceID : data[i],
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			left:0,
			index : i

		})
		var drinkLabel = Ti.UI.createLabel({
			text : data[i].name,
			font : {
				fontSize : 18,
				fontFamily : fontFamilySmall
			},
			color : '#747474',
			height : 'auto',
			width : 'auto',
			sourceID : data[i],
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			left:0,
			index : i
		});
		
		var drinkImge = Ti.UI.createImageView({
			width : platformWidth / 3.5,
			height : platformWidth / 3.5,
			top : 10,
			left : 10,
			index : i,
			sourceID : data[i],
			image : cmsUrl+data[i].drinkfile
		});
		
		labelView.add(nameLabel);
		labelView.add(barLabel);
		labelView.add(drinkLabel);
		// view.add(nameLabel);
		// view.add(barLabel);
		// view.add(drinkLabel);
		view.add(labelView);
		view.add(drinkImge);

		debugSlider(self, 60, function(value) {
			drinkLabel.top = value;
		});
		debugSlider(self, 0, function(value) {
			barLabel.top = value;
		});

		view.addEventListener('click', function(e) {
			var indivi = require('/ui/iphone/individualDrinkWindow');
			var indiviwin = new indivi(e.source.sourceID);
			var rootWindow = Titanium.UI.createWindow({
				title : 'rootWindow',
				backgroundColor : "blue",
			});
			
			navigroup.open(indiviwin, {
				animated : true
			});

		});
		scrollView.add(view);
	}
	self.add(scrollView);
	return self;
};

module.exports = drinksListWindow;
