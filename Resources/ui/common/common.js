var platformWidth = Titanium.Platform.displayCaps.platformWidth;
var platformHeight = Titanium.Platform.displayCaps.platformHeight;
var cmsUrl = 'http://wf-tromba-staging.littleroominc.com'
var debugMode = false;
//get the image blob by file name
var getImageByFileName = function(filePath) {
	imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, filePath);
	var image = imageFile.read();
	return image;
};

var scaleHeightByWidth = function(filePath) {
	return getImageByFileName(filePath).height * platformWidth / getImageByFileName(filePath).width
}
//call this function to add a button at the top left cornor
var addBackButton = function(targetWindow, newScrollView, eventCallBack) {
	var button = Titanium.UI.createButton({
		height : getImageByFileName("/images/iphoneImage/backButton.png").height / 2,
		width : getImageByFileName("/images/iphoneImage/backButton.png").width / 2,
		backgroundImage : "/images/iphoneImage/backButton.png",
	});
	targetWindow.leftNavButton = button;
	button.addEventListener('click', function() {
		targetWindow.leftNavButton = null;
		newScrollView.animate({
			top : 900,
			duration : 500
		}, function() {
			targetWindow.remove(newScrollView);
		});
		eventCallBack();
	});
	return button;
}
//add a scroll view to page, ususally happen after you click a button
var addScrollView = function() {
	var scrollview = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		//height : platformHeight - 62.89308176100629 - 50 - 10,
		height : 'auto',
		width : '100%',
		layout : 'vertical',
		top : 0,
		zIndex : 8
	});
	return scrollview;
};

//is used to move element up and down with a slide bar
var debugSlider = function(targetWindow, top, callBack) {
	var slider = Titanium.UI.createSlider({
		top : top,
		right : 0,
		min : 0,
		max : 680,
		width : '100%',
		zIndex : 100
	});
	slider.addEventListener('change', function(e) {
		callBack(e.source.value);

	});

	if (debugMode)
		targetWindow.add(slider)
	return slider;
};

//add the gray title bar below the window.
var addTitleBar = function(title, targetWindow) {
	var titleView = Ti.UI.createView({
		backgroundColor : '#706f73',
		height : 50,
		width : 'auto',
		top : 0,
		zIndex : 9,
	});

	var label = Ti.UI.createLabel({
		color : 'white',
		text : title,
		font : {
			fontSize : 22,
			fontFamily : 'Mrs Eaves OT'
		},
	});

	titleView.add(label);
	targetWindow.add(titleView);
	return titleView;
}
var addTableView = function(targetWindow, navigationGroup, imageViewArray, labelViewArray,top) {

	var tableData = [];

	var table = Ti.UI.createTableView({
		objName : 'table',
		backgroundColor : 'black',
		style : Ti.UI.iPhone.TableViewStyle.PLAIN,
		separatorStyle : Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
		separatorColor : 'transparent',
	});
	table.top = top;

	for (var i = 0; i < imageViewArray.length; i++) {
		var row = Ti.UI.createTableViewRow({
			className : 'row',
			objName : 'row',
			touchEnabled : true,
			height : 120,
			backgroundColor : "#212121",
		});
		if (i % 2 == 1)
			row.backgroundColor = '#2b2b2b';
		if (imageViewArray[i]) {
			row.add(imageViewArray[i]);
		}
		if (labelViewArray[i])
			row.add(labelViewArray[i]);
		tableData.push(row);
	}

	table.setData(tableData);

	var drinklistwin_ini = require('/ui/iphone/drinksListWindow');
	var drinklistwin = new drinklistwin_ini(navigationGroup);
	
	// var emptyView = Titanium.UI.createView({});
	// drinklistwin.leftNavButton = emptyView 

	table.addEventListener('click', function(e) {
		if (e.source && e.source.objName !== 'table') {
			navigationGroup.open(drinklistwin, {
				animated : true
			});
		}
	});

	targetWindow.add(table);

}


