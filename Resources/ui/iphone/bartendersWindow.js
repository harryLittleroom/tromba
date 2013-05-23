var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function bartendersWindow(commonProperties) {
	var data = Data.readTrombData();
	var self = new commonWindow();
	self.index = 1;
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderHeaderBackground.jpg')
	var scrollView = new addScrollView();

	for (var i = 0; i < data.length; i++) {
		var view = Titanium.UI.createView({
			backgroundImage : '/images/iphoneImage/bartenderHeaderBackground.jpg',
			width : platformWidth,
			height : bartenderImage.height * platformWidth / bartenderImage.width,
			top : bartenderImage.height * platformWidth / bartenderImage.width * i,
			sourceID:data[i],
			index : i
		});

		var fontsize = 14;
		var leftposition = 149;
		var nameLabel = Ti.UI.createLabel({
			text : data[i].contact.name+'222',
			font : {
				fontSize : fontsize
			},
			color : 'white',
			top : 18,
			height : 'auto',
			width : 'auto',
			index : i,
			sourceID:data[i],
			//backgroundColor:'red',
			left : leftposition,
		})
		
		var barLabel = Ti.UI.createLabel({
			text : data[i].company.name,
			font : {
				fontSize : fontsize
			},
			color : '#c9823a',
			top : 46,
			height : 'auto',
			width : 'auto',
			left : leftposition,
			sourceID:data[i],
			index : i

		})
		var drinkLabel = Ti.UI.createLabel({
			text : data[i].name,
			font : {
				fontSize : fontsize
			},
			color : '#01b6fd',
			top : 75,
			height : 'auto',
			width : 'auto',
			left : leftposition,
			sourceID:data[i],
			index : i
		});
		var portraitImage2 = Ti.UI.createImageView({
		//backgroundColor:'white',
		width : platformWidth / 3.5,
		height : platformWidth / 3.5,
		top : 10,
		left : 10,
		index : i,
		sourceID:data[i],
		image:data[i].contact.picture
		});
		view.add(nameLabel);
		view.add(barLabel);
		view.add(drinkLabel);
		view.add(portraitImage2);

		debugSlider(self, 60, function(value) {
			drinkLabel.top = value;
		});
		debugSlider(self, 0, function(value) {
			barLabel.top = value;
		});

		view.addEventListener('click', function(e) {

			self.remove(scrollView);
			var winview = require('ui/iphone/bartenderView');
			var winview = new winview(e.source.sourceID);
			var scrollViewInside = new addScrollView();
			var button = new addBackButton(self, scrollViewInside, function() {
				self.add(scrollView);
			});
			scrollViewInside.zIndex = 9;
			//	scrollViewInside.backgroundColor='green';
			scrollViewInside.add(winview)
			self.add(scrollViewInside);

		});
		scrollView.add(view);
	}	
	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
