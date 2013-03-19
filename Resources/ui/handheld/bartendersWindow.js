var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();
	var topBarHeight = self.topBarHeight

	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')

	var createView = function() {
		var scrollview = Ti.UI.createScrollView({
			contentWidth : 'auto',
			contentHeight : 'auto',
			showVerticalScrollIndicator : true,
			showHorizontalScrollIndicator : false,
			height : '70%',
			width : '100%',
			top : topBarHeight
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
			var win = new commonWindow();

			var button = Titanium.UI.createButton({
				title : 'Open new window',
				top : 40,
				height : 40,
				width : 200
			});
			button.addEventListener('click', function() {
				win.close();
			})
			var winview = Ti.UI.createView({
				backgroundImage : '/images/iphoneImage/bartenderImage.png',
				height : getImageByFileName('/images/iphoneImage/bartenderImage.png').height * platformWidth / getImageByFileName('/images/iphoneImage/bartenderImage.png').width,
				top : self.children[0].height

			});

			var scrollViewInside = new createView();
			
			scrollViewInside.add(winview)
			win.add(scrollViewInside);
			win.add(button);
			self.containingTab.open(win);
		})
		scrollView.add(view);
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
