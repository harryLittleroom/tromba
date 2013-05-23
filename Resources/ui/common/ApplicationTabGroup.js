function ApplicationTabGroup(Windows) {
	//create module instance

	var self = Ti.UI.createTabGroup();

	var win1 = new Windows[0](), win2 = new Windows[1]();
	win3 = new Windows[2]();
	win4 = new Windows[3]();
	win5 = new Windows[4]();
	var winArray = [win1, win2, win3, win4,win5];
	var tabArray = [];

	for (var i = 0; i < winArray.length; i++) {
		var tab = Ti.UI.createTab({
			window : winArray[i],
			title : i
		});
		winArray[i].containingTab = tab;
		tabArray.push(tab)
	}

	for (var k = 0; k < tabArray.length; k++) {
		self.addTab(tabArray[k]);
		Ti.App.TabGroup = self;
	}
	self.tabs[4].active = true;
	return self;
};

module.exports = ApplicationTabGroup;
