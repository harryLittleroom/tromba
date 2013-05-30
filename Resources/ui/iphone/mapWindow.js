var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

var mapWindow = function(sourceID) {
	//var data = Data.readTrombData();
	var mapwin = new commonWindow();
	mapwin.backgroundColor = 'green';

	var mountainView = Titanium.Map.createAnnotation({
		latitude : 37.390749,
		longitude : -122.081651,
		title : "Appcelerator Headquarters",
		subtitle : 'Mountain View, CA',
		pincolor : Titanium.Map.ANNOTATION_RED,
		animate : true,
		leftButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
		myid : 1 // Custom property to uniquely identify this annotation.
	});

	var mapview = Titanium.Map.createView({
		mapType : Titanium.Map.STANDARD_TYPE,
		region : {
			latitude : 37.390749,
			longitude : -122.081651,
			latitudeDelta : 0.01,
			longitudeDelta : 0.01
		},
		animate : true,
		regionFit : true,
		userLocation : true,
		annotations : [mountainView]
	});
	
	mountainView.addEventListener('click',function(){
		Titanium.Platform.openURL("http://maps.apple.com/maps?q=37.390749,-122.081651");
	})
	
	mapwin.add(mapview);
	
	
	return mapwin;
}
module.exports = mapWindow;
