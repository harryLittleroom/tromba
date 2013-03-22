Ti.include('/ui/common/common.js');

function ApplicationWindow() {
	
	var gotdata = getAppData(function(e){Ti.API.log(e)});
	var bottomTabWidth = platformWidth / 4;
	var imageHeight = getImageByFileName("/images/iphoneImage/bartenderTab.jpg").height;
	var imageWidth = getImageByFileName("/images/iphoneImage/bartenderTab.jpg").width;
	
	var self = Ti.UI.createWindow({
		barImage : '/images/iphoneImage/topbar.png',
		title : null,
		tabBarHidden : true,
		backgroundImage : '/images/iphoneImage/background.jpg',
		topBarHeight : 50,
		bottomBarHeight : imageHeight * bottomTabWidth / imageWidth,
		name:'common window'
	});

	var bottomTabView = new Array();
	var tabButtonImageArray = ['/images/iphoneImage/storyTab.jpg','/images/iphoneImage/bartenderTab.jpg','/images/iphoneImage/recoTab.jpg','/images/iphoneImage/searchTab.jpg']
	for (var i = 0; i < 4; i++) {
		bottomTabView[i] = Titanium.UI.createView({
			backgroundImage : tabButtonImageArray[i],
			width : bottomTabWidth,
			height : imageHeight * bottomTabWidth / imageWidth,
			bottom : 0,
			left : 0 + bottomTabWidth * i,
			indexArray : [0, 1, 2, 3],
			index : i,
			zIndex : 10
		});
		bottomTabView[i].addEventListener('click', function(e) {
			self.tabGroup.tabs[e.source.index].active = true;
		})
		self.add(bottomTabView[i]);
	}

	return self;
};

module.exports = ApplicationWindow;
