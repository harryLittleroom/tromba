var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function drinkTypeWindow(commonProperties) {

	var rootWindow = Titanium.UI.createWindow({
		title : 'rootWindow',
		backgroundColor : "white",
		navBarHidden : true
	});

	var drinkTypeWin = new commonWindow();
	var titleView = addTitleBar('Recipes', drinkTypeWin);
	var drinkTypeWinNavGroup = Titanium.UI.iPhone.createNavigationGroup({
		window : drinkTypeWin
	});

	rootWindow.add(drinkTypeWinNavGroup);

	var imageArray = [];

	var labelViewArray = [];

	function createImage(url) {
		var img = Ti.UI.createImageView({
			height : 100,
			width : 100,
			image : url,
			left : 10,
			top : 10,
			bottom : 10,

		});
		return img;
	}

	imageArray[0] = new createImage('/images/iphoneImage/recipe_list.jpg');
	imageArray[1] = new createImage('/images/iphoneImage/canadaianflag.jpg');
	imageArray[2] = new createImage('/images/iphoneImage/melflag.jpg');

	function addLabelView(title, description) {

		var rightLabelView = Ti.UI.createView({
			height : 100,
			left : 120,
			top : 10,
			bottom : 10,
		});

		var rightLabel1 = Ti.UI.createLabel({
			color : 'white',
			objName : 'label',
			text : title,
			touchEnabled : false,
			width : 200,
			top : 10
		});

		var rightLabel2 = Ti.UI.createLabel({
			color : 'white',
			objName : 'label',
			text : description,
			touchEnabled : false,
			width : 200,
			top : 30,
			font : {
				fontSize : 12,
				fontFamily : 'Mrs Eaves OT'
			}
		});

		if (rightLabel1)
			rightLabelView.add(rightLabel1);
		if (rightLabel2)
			rightLabelView.add(rightLabel2);
		return rightLabelView;

	}

	labelViewArray[0] = new addLabelView('Signature Drink', 'Get some inspiration and find out how to use Tequila Tromba in some killer cocktails');
	labelViewArray[1] = new addLabelView('Toronto', 'Ontario');
	labelViewArray[2] = new addLabelView('Melbourne', 'Victoria');
	//labelViewArray.push(signatureLabelView);

	addTableView(drinkTypeWin, drinkTypeWinNavGroup, imageArray, labelViewArray, titleView.height);

	return rootWindow;
};

module.exports = drinkTypeWindow;
