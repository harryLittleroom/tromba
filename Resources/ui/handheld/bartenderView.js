var Data = require('ui/common/DAL');

var bartenderView = function(i) {

	var data = Data.readTrombData();
	var self = Ti.UI.createView({
		//backgroundImage : '/images/iphoneImage/bartenderImage.jpg',
		height : scaleHeightByWidth('/images/iphoneImage/bartenderImage.jpg')
	});
	var header = Ti.UI.createImageView({
		image : '/images/iphoneImage/bartenderHeaderBackground.jpg',
		width : platformWidth,
		height : scaleHeightByWidth('/images/iphoneImage/bartenderHeaderBackground.jpg'),
		top : 0,
		backgroundColor : 'red'
	})

	var portraitImage = Ti.UI.createImageView({
		backgroundColor : '#8e583c',
		width : platformWidth / 3.5,
		height : platformWidth / 3.5,
		top : 10,
		left : 10,
		borderRadius : 20,
	});
	var nameLabel = Ti.UI.createLabel({
		text : data[i].contact.name,
		color : 'white',
		top : 15.35,
		height : 'auto',
		width : 'auto',
		//backgroundColor:'red',
		left : 143,
	})
	var barLabel = Ti.UI.createLabel({
		text : data[i].company.name,
		color : '#c9823a',
		top : 44.44,
		height : 'auto',
		width : 'auto',
		left : 143,

	})
	var drinkLabel = Ti.UI.createLabel({
		text : 'Need drink name',
		color : '#01b6fd',
		top : 73.53,
		height : 'auto',
		width : 'auto',
		left : 143,
	});

	var recipeLabel = Ti.UI.createLabel({
		text : 'Recipe: ',
		font : {
			fontFamily : 'Zapfino',
			fontSize: 18
		},
		color : 'black',
		top : 133.93,
		height : 'auto',
		width : 'auto',
		left : 58.44,
	});
	
	var drinkName = Ti.UI.createLabel({
		text : 'Need drink name too ',
		font : {
			fontFamily : 'Zapfino',
			fontSize: 18,
			fontWeight:'bold'
		},
		color : 'black',
		top : 133.93,
		height : 'auto',
		width : 'auto',
		left : 136.03,
	});
	
	var drinkImage = Ti.UI.createImageView({
		backgroundColor : '#8e583c',
		width : platformWidth / 3.5,
		height : platformWidth / 3.5,
		borderRadius:20,
		top:209.49,
	});
	
	
	var stepLabel = Ti.UI.createLabel({
		text : Data.parseHtml(data[i].description),
		font : {
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : 'black',
		top : 337.93,
		height : 'auto',
		width : 'auto',
		left : 28.03,
	}); 
	
	var quoatLabel = Ti.UI.createLabel({
		text : data[i].quote,
		font:{
			fontSize : 12,
			fontWeight : 'bold'
		},
		color : 'white',
		top : 509.93,
		height : 'auto',
		width : 'auto',
		left : 28.03,
	}); 
	
	var signatureLabel = Ti.UI.createLabel({
		text : '~'+data[i].contact.name,
		font : {
			fontSize : 17,
			fontWeight : 'bold'
		},
		color : 'white',
		top : 614.93,
		height : 'auto',
		width : 'auto',
		left : 76.03,
	}); 

	
	debugSlider(self,600, function(value) {
		signatureLabel.left = value;
	});
	debugSlider(self,630, function(value) {
		signatureLabel.top = value;
	});
	
	self.add(header);
	self.add(portraitImage);
	self.add(nameLabel);
	self.add(barLabel);
	self.add(drinkLabel);
	self.add(recipeLabel);
	self.add(drinkName);
	self.add(drinkImage);
	self.add(stepLabel);
	self.add(quoatLabel);
	self.add(signatureLabel);
	var shareButton = Ti.UI.createButton({
		height : 30,
		width : 263,
		backgroundImage : '/images/iphoneImage/shareButton.png',
		top :685
	});

	shareButton.addEventListener('click', function() {
		Ti.Facebook.appid = '234930539978070';
		Ti.Facebook.permissions = ['publish_stream'];
		Ti.Facebook.authorize();

		var data = {
			link : "http://www.tequilatromba.com/",
			name : "Tromba Mobile",
			message : "Find out more awesome bartender with Tromba Mobile",
			caption : "Tromba Mobile",
			picture : "http://www.tequilatromba.com/images/site_logo.png",
			description : "To find out more recipe, please click here to download the app"
		};
		Titanium.Facebook.dialog("feed", data, function(e) {
		});
	});

	self.add(shareButton);
	return self;
}
module.exports = bartenderView;
