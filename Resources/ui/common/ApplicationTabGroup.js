function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	var win1 = new Window[0](),
		win2 = new Window[1]();
		win3 = new Window[2]();
		win4 = new Window[3]();
	var winArray = [win1,win2,win3,win4];
	var tabArray=[];
	for(var i=0;i<winArray.length;i++)
	{
		var tab = Ti.UI.createTab({
		window: winArray[i],
		title:i
		});
		winArray[i].containingTab = tab;
		tabArray.push(tab)
	}
	for(var k=0;k<tabArray.length;k++)
	{
		self.addTab(tabArray[k]);
	}
	
	
	return self;
};

module.exports = ApplicationTabGroup;
