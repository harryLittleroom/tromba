var commonWindow = require('ui/handheld/ApplicationWindow');
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
			index:i
		});

		var fontsize = 14;
		var leftposition = 149;
		var nameLabel = Ti.UI.createLabel({
			text : data[i].contact.name,
			font : {
				fontSize : fontsize
			},
			color : 'white',
			top : 21,
			height : 'auto',
			width : 'auto',
			//backgroundColor:'red',
			left : leftposition,
		})
		var barLabel = Ti.UI.createLabel({
			text : data[i].company.name,
			font : {
				fontSize : fontsize
			},
			color : '#c9823a',
			top : 49,
			height : 'auto',
			width : 'auto',
			left : leftposition,

		})
		var drinkLabel = Ti.UI.createLabel({
			text : 'Need drink name',
			font : {
				fontSize : fontsize
			},
			color : '#01b6fd',
			top : 78,
			height : 'auto',
			width : 'auto',
			left : leftposition,
		});

		view.add(nameLabel);
		view.add(barLabel);
		view.add(drinkLabel);

		debugSlider(self, 60, function(value) {
			drinkLabel.top = value;
		});
		debugSlider(self, 0, function(value) {
			barLabel.top = value;
		});

		view.addEventListener('click', function(e) {

			self.remove(scrollView);
			var winview = require('ui/handheld/bartenderView');
			var winview = new winview(e.source.index);
			var scrollViewInside = new addScrollView();
			var button = new addBackButton(self, scrollViewInside, function() {
				self.add(scrollView);
			});
			scrollViewInside.zIndex = 9;
			//	scrollViewInside.backgroundColor='green';
			scrollViewInside.add(winview)
			self.add(scrollViewInside);

		})
		scrollView.add(view);
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
