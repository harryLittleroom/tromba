var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function drinkTypeWindow(commonProperties) {
	var self = new commonWindow();
	var imageArray=[];
	var labelViewArray=[];
	
	//addTitleBar('drink', self);
	

	imageArray[0] = Ti.UI.createImageView({
		height : 100,
		width : 100,
		image : '/images/iphoneImage/bartenderRow1.jpg',
		left : 10,
		top : 10,
		bottom : 10,

	}); 
	
	imageArray[1] = Ti.UI.createImageView({
		height : 100,
		width : 100,
		image : '/images/iphoneImage/bartenderRow1.jpg',
		left : 10,
		top : 10,
		bottom : 10,

	}); 
	
	imageArray[2] = Ti.UI.createImageView({
		height : 100,
		width : 100,
		image : '/images/iphoneImage/bartenderRow1.jpg',
		left : 10,
		top : 10,
		bottom : 10,

	}); 
	
	
	var rightLabelView = Ti.UI.createView({
		height : 100,
		left : 120,
		top : 10,
		bottom : 10,
	});
	
	var rightLabel1 = Ti.UI.createLabel({
		color : 'white',
		objName : 'label',
		text : 'Signature Server',
		touchEnabled : false,
		width : 200,
		top:10
	}); 
	
	var rightLabel2 = Ti.UI.createLabel({
		color : 'white',
		objName : 'label',
		text : 'Get some inspiration and find out why people will drink boo, well, you know, we are cool, like working over the weekend and feel like we are not too drunk yet.',
		touchEnabled : false,
		width : 200,
		top:30,
		font:{fontSize:10}
	}); 
	
	if(rightLabel1)rightLabelView.add(rightLabel1);
	if(rightLabel2)rightLabelView.add(rightLabel2);
	
	labelViewArray.push(rightLabelView);
	
	
	addTableView(self,imageArray,labelViewArray);
	return self;
};

module.exports = drinkTypeWindow;
