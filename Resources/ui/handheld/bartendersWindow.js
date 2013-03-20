var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')
	Ti.API.log(topBarHeight);
	Ti.API.log(bottonBarHeight);
	
	var scrollView = new addScrollView();

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

			var button = new addBackButton(self, function() {
				self.add(scrollView);
				self.leftNavButton = null;
				scrollViewInside.animate({
					top : 900,
					duration : 500
				}, function() {
					self.remove(scrollViewInside);
				});
			});
			var winview = Ti.UI.createView({
				backgroundImage : '/images/iphoneImage/bartenderImage.png',
				height : getImageByFileName('/images/iphoneImage/bartenderImage.png').height * platformWidth / getImageByFileName('/images/iphoneImage/bartenderImage.png').width,
			});
			var scrollViewInside = new addScrollView();
			scrollViewInside.height = scrollViewInside.height;
			scrollViewInside.zIndex = 9;
			scrollViewInside.add(winview)
			self.add(scrollViewInside);
		})
		scrollView.add(view);
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
