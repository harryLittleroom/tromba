var platformWidth = Titanium.Platform.displayCaps.platformWidth;
var platformHeight = Titanium.Platform.displayCaps.platformHeight;

//get the image blob by file name
var getImageByFileName = function(fileName) {
	imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
	var image = imageFile.read();
	return image;
}

//call this function to add a button at the top left cornor
var addBackButton = function(targetWindow, eventCallBack) {
	var button = Titanium.UI.createButton({
		height : getImageByFileName("/images/iphoneImage/backButton.png").height / 2,
		width : getImageByFileName("/images/iphoneImage/backButton.png").width / 2,
		backgroundImage : "/images/iphoneImage/backButton.png",
	});
	targetWindow.leftNavButton = button;

	button.addEventListener('click', function() {
		eventCallBack();
	});
	return button;
}

//add a scroll view to page, ususally happen after you click a button
var addScrollView = function() {
		var scrollview = Ti.UI.createScrollView({
			contentWidth : 'auto',
			contentHeight : 'auto',
			showVerticalScrollIndicator : true,
			showHorizontalScrollIndicator : false,
			height : platformHeight - 62.89308176100629-50-10,
			width : '100%',
			top : 0,
			zIndex : 8
		});
		return scrollview;
	};