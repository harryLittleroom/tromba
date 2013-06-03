var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

var mapWindow = function(sourceID) {
	//var data = Data.readTrombData();
	var mapwin = new commonWindow();
	var currentlongitude;
	var currentlatitude;

	Titanium.Geolocation.purpose = "GPS user coordinates";
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.error) {
			// manage the error
			return;
		}

		currentlongitude = e.coords.longitude;
		currentlatitude = e.coords.latitude;
		// var altitude = e.coords.altitude;
		// var heading = e.coords.heading;
		// var accuracy = e.coords.accuracy;
		// var speed = e.coords.speed;
		// var timestamp = e.coords.timestamp;
		// var altitudeAccuracy = e.coords.altitudeAccuracy;

		// we use the above data the way we need it
	});

	var mountainView = Titanium.Map.createAnnotation({
		latitude : 43.645972,
		longitude : -79.399079,
		title : "Appcelerator Headquarters",
		subtitle : 'Mountain View, CA',
		pincolor : Titanium.Map.ANNOTATION_RED,
		animate : true,
		leftButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
		myid : 1 // Custom property to uniquely identify this annotation.
	});

	var mapview = Titanium.Map.createView({
		mapType : Titanium.Map.STANDARD_TYPE,
		animate : true,
		regionFit : true,
		userLocation : true,
		annotations : [mountainView]
	});

	var boston = {
		latitude : currentlatitude,
		longitude : currentlongitude,
		latitudeDelta : 0.010,
		longitudeDelta : 0.018
	};
	mapview.setLocation(boston);

	mapwin.addEventListener('open', function(e) {
		var boston = {
			latitude : currentlatitude,
			longitude : currentlongitude,
			latitudeDelta : 0.010,
			longitudeDelta : 0.018
		};
		mapview.setLocation(boston);
	});

	mountainView.addEventListener('click', function() {
	});

	mapwin.add(mapview);

	return mapwin;
}
module.exports = mapWindow;
