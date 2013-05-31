Ti.include('/ui/common/common.js');

function ApplicationWindow() {

	var bottomTabWidth = platformWidth / 4;
	var imageHeight = getImageByFileName("/images/iphoneImage/bartenderTab.jpg").height;
	var imageWidth = getImageByFileName("/images/iphoneImage/bartenderTab.jpg").width;
	var numberOfTab = 5
	var linearGradient = Ti.UI.createView({
		width : getImageByFileName("/images/iphoneImage/toplogo.png").width/2,
		height : getImageByFileName("/images/iphoneImage/toplogo.png").height/2,
		backgroundImage:'/images/iphoneImage/toplogo.png'
	});

	var self = Ti.UI.createWindow({
		barImage : '/images/iphoneImage/topbarbkimage.png',
		titleControl:linearGradient,
		title : null,
		topBarHeight : 50,
		bottomBarHeight : imageHeight * bottomTabWidth / imageWidth,
		name : 'common window',
		backgroundColor:'#2b2b2b'
	});

	return self;
};

module.exports = ApplicationWindow;
