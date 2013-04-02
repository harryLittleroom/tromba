var commonWindow = require('ui/handheld/ApplicationWindow');

function searchWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 3;
	var textBox = Ti.UI.createTextField({
		width : platformWidth * 0.8,
		height : 30,
		top : 20,
		borderRadius : 10,
		hintText : 'Enter Keywords',
		backgroundColor : 'white',
		paddingLeft : 10,
		autocorrect : false,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
	});

	//textBox.clearButtonMode = UITextFieldViewModeWhileEditing;
	var Data = require('ui/common/DAL');
	var data = Data.readTrombData();
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderHeaderBackground.jpg');
	var searchScrollView = function() {
		return Ti.UI.createScrollView({
			backgroundColor : 'transparent',
			width : platformWidth,
			height : platformHeight - 62.89308176100629 - 50 - 10 - 60,
			top : 60
		})
	}
	var fontsize = 14;
	var leftposition = 149;
	textBox.addEventListener('change', function(e) {
		var resultArray = new Array();
		if (searchView) {
			self.remove(searchView);
		};
		for (var j = 0; j < self.children.length; j++) {
			if (self.children[j].toString().search('TiUIScrollView') != -1) {
				self.remove(self.children[j]);
			}
		}
		var searchView = new searchScrollView();
		for (var k = 0; k < data.length; k++) {
			var index = JSON.stringify(data[k]).search(new RegExp(e.source.value, "i"))
			if (index != -1) {
				resultArray.push(data[k])
			}
		}

		for (var i = 0; i < resultArray.length; i++) {

			var nameLabel = Ti.UI.createLabel({
				text : resultArray[i].contact.name,
				font : {
					fontSize : fontsize
				},
				color : 'white',
				top : 21,
				height : 'auto',
				width : 'auto',
				//backgroundColor:'red',
				left : leftposition,
				sourceID:resultArray[i],
			})
			var barLabel = Ti.UI.createLabel({
				text : resultArray[i].company.name,
				font : {
					fontSize : fontsize
				},
				color : '#c9823a',
				top : 49,
				height : 'auto',
				width : 'auto',
				left : leftposition,
				sourceID:resultArray[i],

			})
			var drinkLabel = Ti.UI.createLabel({
				text : resultArray[i].name,
				font : {
					fontSize : fontsize
				},
				color : '#01b6fd',
				top : 78,
				height : 'auto',
				width : 'auto',
				left : leftposition,
				sourceID:resultArray[i],
			});

			var portraitImage = Ti.UI.createImageView({
				width : platformWidth / 3.5,
				height : platformWidth / 3.5,
				top : 10,
				left : 10,
				borderRadius : 20,
				image : resultArray[i].contact.picture,
				sourceID:resultArray[i],
			});

			var view = Titanium.UI.createView({
				backgroundImage : '/images/iphoneImage/bartenderHeaderBackground.jpg',
				width : platformWidth,
				height : bartenderImage.height * platformWidth / bartenderImage.width,
				top : bartenderImage.height * platformWidth / bartenderImage.width * i,
				index : i,
				sourceID:resultArray[i],
			});
			view.add(nameLabel);
			view.add(barLabel);
			view.add(drinkLabel);
			view.add(portraitImage);
			searchView.add(view);

			view.addEventListener('click', function(e) {
				self.remove(searchView);
				self.remove(textBox);
				var winview = require('ui/handheld/bartenderView');
				Ti.API.log(e.source);
				var winview = new winview(e.source.sourceID);
				var scrollViewInside = new addScrollView();
				var button = new addBackButton(self, scrollViewInside, function() {
					self.add(searchView);
					self.add(textBox);
				});
				scrollViewInside.zIndex = 9;
				//	scrollViewInside.backgroundColor='green';
				scrollViewInside.add(winview)
				self.add(scrollViewInside);
			})
		}
		self.add(searchView);
	})
	self.add(textBox);

	return self;
};

module.exports = searchWindow;
