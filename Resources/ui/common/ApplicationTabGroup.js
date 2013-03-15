function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window[0](L('home')),
		win2 = new Window[1](L('settings'));
		win3 = new Window[2](L('settings'));
		win4 = new Window[3](L('settings'));
	var winArray = [win1,win2,win3,win4];
	var tabArrauy=[];
	for(var value in winArray)
	{
		var tab = Ti.UI.createTab({
		window: value
		});
		value.containingTab = tab;
		tabArrauy.push(tab)
	}
	
	var tab1 = Ti.UI.createTab({
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
