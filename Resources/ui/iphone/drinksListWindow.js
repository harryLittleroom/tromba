var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function drinksListWindow(navigroup) {
	var data = Data.readTrombData('drinks');
	//console.log(data);
	var self = new commonWindow();
	self.backgroundColor = '#2b2b2b';
	self.index = 1;
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderHeaderBackground.jpg')
	var scrollView = new addScrollView();

	//console.log(data.length);

	for (var i = 0; i < data.length; i++) {
		var view = Titanium.UI.createView({
			//backgroundImage : '/images/iphoneImage/bartenderHeaderBackground.jpg',
			backgroundColor:'#2b2b2b',
			width : platformWidth,
			height : bartenderImage.height * platformWidth / bartenderImage.width,
			top : bartenderImage.height * platformWidth / bartenderImage.width * i,
			sourceID : data[i],
			index : i
		});

		var fontsize = 14;
		var leftposition = 149;
		//name of drink
		var nameLabel = Ti.UI.createLabel({
			text : data[i].name,
			font : {
				fontSize : fontsize,
				
			},
			color : 'white',
			top : 18,
			height : 'auto',
			width : 'auto',
			index : i,
			sourceID : data[i],
			//backgroundColor:'red',
			left : leftposition,
		})

		var barLabel = Ti.UI.createLabel({
			text : data[i].bar,
			font : {
				fontSize : fontsize
			},
			color : 'white',
			top : 46,
			height : 'auto',
			width : 'auto',
			left : leftposition,
			sourceID : data[i],
			index : i

		})
		var drinkLabel = Ti.UI.createLabel({
			text : data[i].name,
			font : {
				fontSize : fontsize
			},
			color : 'white',
			top : 75,
			height : 'auto',
			width : 'auto',
			left : leftposition,
			sourceID : data[i],
			index : i
		});
		var drinkImge = Ti.UI.createImageView({
			//backgroundColor:'white',
			width : platformWidth / 3.5,
			height : platformWidth / 3.5,
			top : 10,
			left : 10,
			index : i,
			sourceID : data[i],
			image : cmsUrl+data[i].drink
		});
		view.add(nameLabel);
		view.add(barLabel);
		view.add(drinkLabel);
		view.add(drinkImge);

		debugSlider(self, 60, function(value) {
			drinkLabel.top = value;
		});
		debugSlider(self, 0, function(value) {
			barLabel.top = value;
		});

		view.addEventListener('click', function(e) {

			// self.remove(scrollView);
			// var winview = require('ui/iphone/individualDrinkWindow');
			// var winview = new winview(e.source.sourceID);
			// var scrollViewInside = new addScrollView();
			// var button = new addBackButton(self, scrollViewInside, function() {
			// self.add(scrollView);
			// });
			// scrollViewInside.zIndex = 9;
			// //	scrollViewInside.backgroundColor='green';
			// scrollViewInside.add(winview)
			// self.add(scrollViewInside);
			var indivi = require('/ui/iphone/individualDrinkWindow');
			var indiviwin = new indivi(e.source.sourceID);
			// // indiviwin.open();
			//
			// var drinkTypeWinNavGroup = Titanium.UI.iPhone.createNavigationGroup({
			// window : self
			// });
			//
			// drinkTypeWinNavGroup.open(indiviwin, {
			// animated : true
			// });

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
