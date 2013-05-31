var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

var individualDrinkWindow = function(sourceID) {
	//var data = Data.readTrombData();
	var newwin = new commonWindow();
	newwin.backgroundColor = '#2b2b2b';
	var self = Ti.UI.createView({
		//height : scaleHeightByWidth('/images/iphoneImage/bartenderImage.jpg'),
		layout:'vertical',
		backgroundColor : '#2b2b2b'
	});

	var labelContainerWidth = platformWidth * 0.55;
	var labelContainerRight = 10;
	var labelMarginTop = 0;
	var fontsziesmall = 16;
	var fontsziebig = 24;
	var fontFamilySmall = 'Mrs Eaves OT'

	function addBartenderview() {
		var bartenderViewContainer = Ti.UI.createView({
			width : '100%',
			height : '140',
			backgroundColor:'#2b2b2b',
			//top:0,
		});
		var bartenderImage = Ti.UI.createImageView({
			height : 100,
			width : 100,
			image : cmsUrl + sourceID.bartenderfile,
			left : 10,
			top : 20,
			bottom : 20,
		});
		var rightLabelView = Ti.UI.createView({
			right : labelContainerRight,
			top : 20,
			width : labelContainerWidth,
			//backgroundColor : '#0a4b86',
			layout : 'vertical',

		});
		var bartenderNameLabel = Ti.UI.createLabel({
			text : sourceID.bartender,
			color : 'white',
			top : 0,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziebig,
				fontFamily : fontFamilySmall
			}
		});
		var barNameLabel = Ti.UI.createLabel({
			text : sourceID.bar,
			color : 'white',
			top : labelMarginTop,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziesmall,
				fontFamily : fontFamilySmall
			}
		});
		var quotaLabel = Ti.UI.createLabel({
			text : sourceID.quote,
			color : 'white',
			top : labelMarginTop,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziesmall,
				fontFamily : fontFamilySmall
			},
			//backgroundColor:'green'
		});

		rightLabelView.add(bartenderNameLabel);
		rightLabelView.add(barNameLabel);
		rightLabelView.add(quotaLabel);
		bartenderViewContainer.add(bartenderImage);
		bartenderViewContainer.add(rightLabelView);
		return bartenderViewContainer;
	}

	function addDrinkview() {
		var drinkViewContainer = Ti.UI.createView({
			width : '100%',
			height : 'auto',
			//top : 200,
			backgroundColor : '#212121',
		});
		var drinkImage = Ti.UI.createImageView({
			height : 100,
			width : 100,
			image : cmsUrl + sourceID.drinkfile,
			left : 10,
			top : 10,
			bottom : 10,
		});
		var drinkRightLabelView = Ti.UI.createView({
			right : labelContainerRight,
			top : 5,
			width : labelContainerWidth,
			//backgroundColor : '#0a4b86',
			layout : 'vertical'
		});
		var drinkNameLabel = Ti.UI.createLabel({
			text : sourceID.name,
			color : 'white',
			top : 0,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziebig,
				fontFamily : fontFamilySmall
			}
			
		});
		var ingredientLabel = Ti.UI.createLabel({
			text : sourceID.ingredients,
			color : 'white',
			top : labelMarginTop,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziesmall,
				fontFamily : fontFamilySmall
			}
		});
		var instruction = Ti.UI.createLabel({
			text : sourceID.instructions,
			color : 'white',
			top : labelMarginTop,
			left : 0,
			textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
			font : {
				fontSize : fontsziesmall,
				fontFamily : fontFamilySmall
			}
		});

		drinkRightLabelView.add(drinkNameLabel);
		drinkRightLabelView.add(ingredientLabel);
		drinkRightLabelView.add(instruction);
		drinkViewContainer.add(drinkImage);
		drinkViewContainer.add(drinkRightLabelView);
		return drinkViewContainer;
	}

	var scrollViewInside = new addScrollView();
	scrollViewInside.height=platformHeight*0.5;
	//scrollViewInside.layout = 'vertical';
	var bartenderView = new addBartenderview();
	var drinkview = new addDrinkview();
	self.add(bartenderView);
	self.add(drinkview);
	scrollViewInside.add(self);
	newwin.add(scrollViewInside);
	return newwin;
}
module.exports = individualDrinkWindow;
