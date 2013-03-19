var platformWidth = Titanium.Platform.displayCaps.platformWidth;
var platformHeight = Titanium.Platform.displayCaps.platformHeight;

var getImageByFileName = function(fileName){
	imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
	var image = imageFile.read();
	return image;
}


