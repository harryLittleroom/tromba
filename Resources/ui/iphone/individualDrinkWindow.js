var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

var individualDrinkWindow = function(sourceID) {
	var newwin = new commonWindow();
	newwin.backgroundColor = '#2b2b2b';
	var self = Ti.UI.createView({
		layout : 'vertical',
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
			backgroundColor : '#2b2b2b',
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
			height : Titanium.UI.SIZE,
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
			top : 10,
			width : labelContainerWidth,
			height : Titanium.UI.SIZE,
			bottom : 10,
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
	};

	function addButtons() {
		var buttonView = Ti.UI.createView({
			width : '100%',
			height : '140',
			backgroundColor : '#323232',
			layout : "vertical",
			height : Titanium.UI.SIZE,
		});

		function createButton(title,top) {
			var button = Ti.UI.createButton({
				title : title,
				width : "90%",
				height : '40',
				top : 10,
				style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
				borderRadius : 10,
				font : {
					fontSize : 20,
					fontFamily : fontFamilySmall,
					fontWeight : 'bold'
				},
				backgroundGradient : {
					type : 'linear',
					colors : ['#4c4c4c', '#2c2c2c'],
					startPoint : {
						x : 0,
						y : 0
					},
					endPoint : {
						x : 0,
						y : 50
					},
					backFillStart : false
				},
				borderWidth : 1,
				borderColor : '#010101'
			});
			if(top)button.top=top;
			return button;
		};
		
		var socialView = Ti.UI.createView({
			width:'100%',
			height:Titanium.UI.SIZE,
			layout:'vertical'
		})
		var shareButton = new createButton('Share');
		var mapButton = new createButton('Map');

		var facebookButton = new createButton('Facebook');
		var twitterButton = new createButton('Twitter');
		var cancelButton = new createButton('Cancel');
		socialView.add(facebookButton);
		socialView.add(twitterButton);
		socialView.add(cancelButton);

		cancelButton.addEventListener('click', function(e) {
			sharewindow.close();
		});

		var sharewindow = Titanium.UI.createWindow({
			navBarHidden : true,
			backgroundColor : '#212121'
		});

		sharewindow.add(socialView);

		mapButton.addEventListener('click', function(e) {
			console.log('click map button');
		});

		shareButton.addEventListener('click', function(e) {
			console.log('click share button');
			sharewindow.open({
				modal : true,
				modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
				modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
			})
		});
		buttonView.add(mapButton);
		buttonView.add(shareButton);
		return buttonView;
	}

	var scrollViewInside = new addScrollView();
	var bartenderView = new addBartenderview();
	var drinkview = new addDrinkview();
	var buttonview = new addButtons();
	scrollViewInside.add(bartenderView);
	scrollViewInside.add(drinkview);
	scrollViewInside.add(buttonview);
	newwin.add(scrollViewInside);
	return newwin;
}
module.exports = individualDrinkWindow;
