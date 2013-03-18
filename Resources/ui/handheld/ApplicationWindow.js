Ti.include('/ui/common/common.js');

function ApplicationWindow(title) {
	
	//var platformWidth = Titanium.Platform.displayCaps.platformWidth;
	var bottomTabWidth=platformWidth/4;
	var self = Ti.UI.createWindow({
		navBarHidden:true,
		tabBarHidden:true,
	});
	var topBarView = Titanium.UI.createView({
		backgroundImage:'/images/iphoneImage/topbar.png',
		width:platformWidth,
		height:50,
		top:0
		});
	var imageHeight = getImageByFileName("/images/iphoneImage/bartenderBottomTab.png").height;
	var imageWidth = getImageByFileName("/images/iphoneImage/bartenderBottomTab.png").width;
	
	
	var bottomTabView = new Array();
	for(var i=0;i<4;i++)
	{
		bottomTabView[i] = Titanium.UI.createView({
		backgroundImage:'/images/iphoneImage/bartenderBottomTab.png',
		width:bottomTabWidth,
		height:imageHeight*bottomTabWidth/imageWidth,
		bottom:0,
		left:0+bottomTabWidth*i,
		indexArray:[0,1,2,3]
		});
		bottomTabView[i].addEventListener('click',function(e){
			Ti.API.log(e.source.indexArray)
		})
		self.add(bottomTabView[i]);
	}
		
	self.add(topBarView);
	
	return self;
};

module.exports = ApplicationWindow;
