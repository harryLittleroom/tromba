var commonWindow = require('ui/handheld/ApplicationWindow');

function searchWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 3;
	var textBox = Ti.UI.createTextField({
		width : platformWidth * 0.8,
		height : 30,
		top : 20,
		borderRadius : 10,
		hintText : 'Enter Keywords',
		backgroundColor : 'white',
		paddingLeft : 10,
		autocorrect : false,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
	});

	//textBox.clearButtonMode = UITextFieldViewModeWhileEditing;
	var Data = require('ui/common/DAL');
	var data = Data.readTrombData();
	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderHeaderBackground.jpg');
	var searchScrollView = function() {
		return Ti.UI.createScrollView({
			backgroundColor : 'transparent',
			width : platformWidth,
			height : platformHeight - 62.89308176100629 - 50 - 10 - 60,
			top : 60
		})
	}
	
	var fontsize = 14;
	var leftposition = 149;
	textBox.addEventListener('change', function(e) {
		var resultArray = new Array();
		Ti.API.log(self.children);
		if(searchView){
			self.remove(searchView);
			//Ti.API.log('clean');
		};
		for(var j=0;j<self.children.length;j++){
			Ti.API.log(self.children[j].toString().search('TiUIScrollView'));
			if(self.children[j].toString().search('TiUIScrollView')!=-1){
				self.remove(self.children[j]);
			}
		}
		var searchView = new searchScrollView();
		for (var k = 0; k < data.length; k++) {
			var index = JSON.stringify(data[k]).search(new RegExp(e.source.value, "i"))
			if (index != -1) {
				resultArray.push(data[k])
			}
			//Ti.API.log(JSON.stringify(data[k]).search(new RegExp(e.source.value, "i")));

		}

		for (var i = 0; i < resultArray.length; i++) {

			var nameLabel = Ti.UI.createLabel({
				text : resultArray[i].contact.name,
				font : {
					fontSize : fontsize
				},
				color : 'white',
				top : 21,
				height : 'auto',
				width : 'auto',
				//backgroundColor:'red',
				left : leftposition,
			})
			var barLabel = Ti.UI.createLabel({
				text : resultArray[i].company.name,
				font : {
					fontSize : fontsize
				},
				color : '#c9823a',
				top : 49,
				height : 'auto',
				width : 'auto',
				left : leftposition,

			})
			var drinkLabel = Ti.UI.createLabel({
				text : resultArray[i].name,
				font : {
					fontSize : fontsize
				},
				color : '#01b6fd',
				top : 78,
				height : 'auto',
				width : 'auto',
				left : leftposition,
			});

			var view = Titanium.UI.createView({
				backgroundImage : '/images/iphoneImage/bartenderHeaderBackground.jpg',
				width : platformWidth,
				height : bartenderImage.height * platformWidth / bartenderImage.width,
				top : bartenderImage.height * platformWidth / bartenderImage.width * i,
				index : i
			});
			view.add(nameLabel);
			view.add(barLabel);
			view.add(drinkLabel);
			searchView.add(view);
			//	Ti.API.log(searchScrollView.height)
		}
		self.add(searchView);
	})
	self.add(textBox);

	return self;
};

module.exports = searchWindow;
