Ti.include('/ui/common/common.js');

function ApplicationWindow(title) {
	var bottomTabWidth=platformWidth/4;
	var self = Ti.UI.createWindow({
		navBarHidden:true,
		tabBarHidden:true,
		backgroundImage:'/images/iphoneImage/background.jpg'
	});
	var topBarView = Titanium.UI.createView({
		backgroundImage:'/images/iphoneImage/topbar.png',
		width:platformWidth,
		height:50,
		top:0
		});
		self.add(topBarView);
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
		indexArray:[0,1,2,3],
		index:i
		});
		bottomTabView[i].addEventListener('click',function(e){
			Ti.API.log(self.tabGroup.tabs[e.source.index].active=true)
		})
		self.add(bottomTabView[i]);
	}
		
	
	
	return self;
};

module.exports = ApplicationWindow;
