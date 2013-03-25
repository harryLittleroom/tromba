var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 1;
	var topBarHeight = self.topBarHeight
	var bottonBarHeight = self.bottomBarHeight
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')
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
			var winview = require('ui/handheld/bartenderView');
			var winview = new winview();
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
