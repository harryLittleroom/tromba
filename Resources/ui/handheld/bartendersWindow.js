var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')
	Ti.API.log(topBarHeight);
	Ti.API.log(bottonBarHeight);
	var createView = function() {
		var scrollview = Ti.UI.createScrollView({
			contentWidth : 'auto',
			contentHeight : 'auto',
			showVerticalScrollIndicator : true,
			showHorizontalScrollIndicator : false,
			height : platformHeight - topBarHeight - bottonBarHeight,
			width : '100%',
			top : 0,
			zIndex : 8
		});
		return scrollview;
	}
	var scrollView = new createView();

	for (var i = 0; i < 10; i++) {
		var view = Titanium.UI.createView({
			backgroundImage : '/images/iphoneImage/bartenderRow.jpg',
			width : platformWidth,
			height : bartenderImage.height * platformWidth / bartenderImage.width,
			top : bartenderImage.height * platformWidth / bartenderImage.width * i,
		});
		view.addEventListener('click', function() {
			self.remove(scrollView);
			var win = new commonWindow();

			var button = Titanium.UI.createButton({
				height : getImageByFileName("/images/iphoneImage/backButton.png").height / 2,
				width : getImageByFileName("/images/iphoneImage/backButton.png").width / 2,
				backgroundImage : "/images/iphoneImage/backButton.png",
			});
			self.leftNavButton = button;
			var winview = Ti.UI.createView({
				backgroundImage : '/images/iphoneImage/bartenderImage.png',
				height : getImageByFileName('/images/iphoneImage/bartenderImage.png').height * platformWidth / getImageByFileName('/images/iphoneImage/bartenderImage.png').width,
			});

			button.addEventListener('click', function() {
				self.add(scrollView);
				self.leftNavButton = null;
				scrollViewInside.animate({
					top : 900,
					duration : 500
				}, function() {
					self.remove(scrollViewInside);
				});
			})
			var scrollViewInside = new createView();
			//	scrollViewInside.top =scrollViewInside.top-50;
			scrollViewInside.height = scrollViewInside.height;
			scrollViewInside.zIndex = 9;
			scrollViewInside.add(winview)
			//winview.add(button);
			self.add(scrollViewInside);
		})
		scrollView.add(view);
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
