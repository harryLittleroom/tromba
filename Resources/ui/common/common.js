var platformWidth = Titanium.Platform.displayCaps.platformWidth;
var platformHeight = Titanium.Platform.displayCaps.platformHeight;

var getImageByFileName = function(fileName) {
	imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
	var image = imageFile.read();
	return image;
}
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
