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
		leftButton : '../images/appcelerator_small.png',
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
	
	mapwin.add(mapview);
	return mapwin;
}
module.exports = mapWindow;
