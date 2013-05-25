function ApplicationTabGroup(Windows) {
	//create module instance

	var self = Ti.UI.createTabGroup();

	var win1 = new Windows[0](), win2 = new Windows[1]();
	win3 = new Windows[2]();
	win4 = new Windows[3]();
	win5 = new Windows[4]();
	var winArray = [win1, win2, win3, win4];
	var tabArray = [];
	var titleArray = ['Our Story','Recipes','Glossary','Find Tromba']
	 var iconArray = ['/images/iphoneImage/icon_03.png', '/images/iphoneImage/drinkicon.png', '/images/iphoneImage/glossary2_03.png', '/images/iphoneImage/locationicon.png']

	for (var i = 0; i < winArray.length; i++) {
		var tab = Ti.UI.createTab({
			title:titleArray[i],
			window : winArray[i],
			icon:iconArray[i],
			visible:false,
		});
		winArray[i].containingTab = tab;
		tabArray.push(tab)
	}

	for (var k = 0; k < tabArray.length; k++) {
		self.addTab(tabArray[k]);
		Ti.App.TabGroup = self;
	}
	self.tabs[1].active = true;
	
	return self;
};

module.exports = ApplicationTabGroup;
