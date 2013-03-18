var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();

	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')

	var scrollView = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : '80%',
		width : '100%',
		top : self.children[0].height
	});

	for (var i = 0; i < 10; i++) {
		var view = Titanium.UI.createView({
			backgroundImage : '/images/iphoneImage/bartenderRow.jpg',
			width : platformWidth,
			height : bartenderImage.height * platformWidth / bartenderImage.width,
			top : bartenderImage.height * platformWidth / bartenderImage.width * i,
		});
		view.addEventListener('click', function() {
			Ti.API.log(self.tabGroup);
			self.close();
			var window = Titanium.UI.createWindow({
				backgroundColor:"white"
			});
			window.open();
			// var bartenderWindow = new commonWindow('myTitle');
			// bartenderWindow.open();
		})
		scrollView.add(view);
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
