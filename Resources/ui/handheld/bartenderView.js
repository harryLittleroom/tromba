var bartenderView = function() {
	var self = Ti.UI.createView({
		backgroundImage : '/images/iphoneImage/bartenderImage.jpg',
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
		text : 'Sandy',
		color : 'white',
		top : 15.35,
		height : 'auto',
		width : 'auto',
		//backgroundColor:'red',
		left : 143,
	})
	var barLabel = Ti.UI.createLabel({
		text : 'Sandy',
		color : '#c9823a',
		top : 44.44,
		height : 'auto',
		width : 'auto',
		left : 143,

	})
	var drinkLabel = Ti.UI.createLabel({
		text : 'Sandy',
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
		top : 113.93,
		height : 'auto',
		width : 'auto',
		left : 44.44,
	});
	
	var drinkName = Ti.UI.createLabel({
		text : 'Raging Bull ',
		font : {
			fontFamily : 'Zapfino',
			fontSize: 18,
			fontWeight:'bold'
		},
		color : 'black',
		top : 113.93,
		height : 'auto',
		width : 'auto',
		left : 112.03,
	});
	
	var drinkImage = Ti.UI.createImageView({
		backgroundColor : '#8e583c',
		width : platformWidth / 3.5,
		height : platformWidth / 3.5,
		borderRadius:20,
		top:216.3,
	})
	
	debugSlider(self,0, function(value) {
		shareButton.top = value;
	});
	debugSlider(self,10, function(value) {
		drinkImage.top = value;
	});
	//Ti.API.log(sliderValue)
	// self.titleControl.addEventListener('change', function(e) {
	// sliderBarValue = e.source.value;
	// Ti.API.log(sliderBarValue)
	// })

	self.add(header);
	self.add(portraitImage);
	self.add(nameLabel);
	self.add(barLabel);
	self.add(drinkLabel);
	self.add(recipeLabel);
	self.add(drinkName);
	self.add(drinkImage);
	var shareButton = Ti.UI.createButton({
		height : 30,
		width : 263,
		backgroundImage : '/images/iphoneImage/shareButton.png',
		top :636
	});

	shareButton.addEventListener('click', function() {
		Ti.Facebook.appid = '234930539978070';
		Ti.Facebook.permissions = ['publish_stream'];
		// Permissions your app needs
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
	//test home mac commit
	return self;
}
module.exports = bartenderView;
