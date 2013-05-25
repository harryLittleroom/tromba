var Data = require('ui/common/DAL');

var individualDrinkWindow = function(sourceID) {
	var data = Data.readTrombData();
	var self = Ti.UI.createView({
		height : scaleHeightByWidth('/images/iphoneImage/bartenderImage.jpg')
	});
	var header = Ti.UI.createImageView({
		image : '/images/iphoneImage/bartenderHeaderBackground.jpg',
		width : platformWidth,
		height : scaleHeightByWidth('/images/iphoneImage/bartenderHeaderBackground.jpg'),
		top : 0,
		backgroundColor : 'red'
	})
	
	var fontsize = 14;
	var portraitImage = Ti.UI.createImageView({
		width : platformWidth / 3.5,
		height : platformWidth / 3.5,
		top : 10,
		left : 10,
		borderRadius : 20,
		image:sourceID.contact.picture,
	});
	var nameLabel = Ti.UI.createLabel({
		text : sourceID.contact.name,
		color : 'white',
		top : 19.35,
		height : 'auto',
		width : 'auto',
		//backgroundColor:'red',
		left : 143,
		font:{
			fontSize:fontsize
		}
	})
	var barLabel = Ti.UI.createLabel({
		text : sourceID.company.name,
		color : '#c9823a',
		top : 47.44,
		height : 'auto',
		width : 'auto',
		left : 143,
		font:{
			fontSize:fontsize
		}

	})
	var drinkLabel = Ti.UI.createLabel({
		text : sourceID.name,
		color : '#01b6fd',
		top : 76.53,
		height : 'auto',
		width : 'auto',
		left : 143,
		font:{
			fontSize:fontsize
		}
	});

	var recipeLabel = Ti.UI.createLabel({
		text : 'Recipe: ',
		font : {
			fontFamily : 'Zapfino',
			fontSize: 14
		},
		color : 'black',
		top : 133.93,
		height : 'auto',
		width : 'auto',
		left : 58.44,
	});
	
	var drinkName = Ti.UI.createLabel({
		text : sourceID.name,
		font : {
			fontFamily : 'Zapfino',
			fontSize: 14,
			fontWeight:'bold',
		},
		color : 'black',
		top : 133.93,
		height : 'auto',
		width : 'auto',
		//left : 136.03,
	});
	
	var drinkImage = Ti.UI.createImageView({
		width : platformWidth/2.5,
		height : platformWidth/2.5,
		borderRadius:20,
		top:190.49,
		image:sourceID.picture,
	});
	
	
	var stepLabel = Ti.UI.createLabel({
		text : Data.parseHtml(sourceID.description),
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Mrs Eaves OT'
		},
		color : 'black',
		top : 337.93,
		height : 'auto',
		width : 'auto',
		left : 28.03,
	}); 
	
	var quoatLabel = Ti.UI.createLabel({
		text : '"'+sourceID.quote+'"',
		font:{
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Mrs Eaves OT'
		},
		color : 'white',
		top : 459.93,
		height : 'auto',
		width : '80%',
		left : 28.03,
		//backgroundColor:'white'
	}); 
	
	var signatureLabel = Ti.UI.createLabel({
		text : '~'+sourceID.contact.name,
		font : {
			fontSize : 15,
			fontWeight : 'bold',
			fontFamily : 'Zapfino',
		},
		color : 'white',
		top : quoatLabel.top+80,
		height : 'auto',
		width : '80%',
		//left : 76.03,
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
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
	//self.add(recipeLabel);
	self.add(drinkName);
	self.add(drinkImage);
	self.add(stepLabel);
	self.add(quoatLabel);
	self.add(signatureLabel);
	var shareButton = Ti.UI.createButton({
		height : 30,
		width : 263,
		backgroundImage : '/images/iphoneImage/shareButton.png',
		top :signatureLabel.top+60
	});

	shareButton.addEventListener('click', function() {
		Ti.Facebook.appid = '234930539978070';
		Ti.Facebook.permissions = ['publish_stream'];
		Ti.Facebook.authorize();

		var data = {
			link : "http://www.tequilatromba.com/",
			name : "Tromba Tequila",
			message : "Check out "+sourceID.contact.name+"'s Tromba recipe: "+sourceID.name,
			caption : sourceID.contact.name,
			picture : sourceID.contact.picture,
			description : "Check out "+sourceID.contact.name+"'s Tromba recipe: "+sourceID.name,
		};
		Titanium.Facebook.dialog("feed", data, function(e) {
		});
	});

	self.add(shareButton);
	return self;
}
module.exports = individualDrinkWindow;