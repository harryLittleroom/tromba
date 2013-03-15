function ApplicationWindow(title) {
	var platformWidth = Titanium.Platform.displayCaps.platformWidth;
	var bottomTabWidth=platformWidth/4;
	var self = Ti.UI.createWindow({
		navBarHidden:true,
		tabBarHidden:true,
	});
	var topBarView = Titanium.UI.createView({
		backgroundColor:'red',
		width:platformWidth,
		height:50,
		top:0
		});
		
	var bottomTabView = Titanium.UI.createView({
		backgroundColor:'red',
		width:bottomTabWidth,
		height:50,
		bottom:0,
		left:0,
		});
	for(var i=0;i<4;i++)
	{
		var bottomTabView = Titanium.UI.createView({
		backgroundColor:'red',
		width:bottomTabWidth,
		height:50,
		bottom:0,
		left:0+bottomTabWidth*i,
		});
		self.add(bottomTabView);
	}
		
	self.add(topBarView);
	
	return self;
};

module.exports = ApplicationWindow;
