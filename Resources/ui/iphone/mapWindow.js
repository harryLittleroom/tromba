var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

var mapWindow = function(sourceID) {
	//var data = Data.readTrombData();
	var data = Data.readTrombData('drinks');
	//load the mapwindow by clicking the tab
	function loadbyTab() {
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
		var annotationPointArray = [];

		function createAnnotationPoint(drinkobj) {
			var annotationPoint = Titanium.Map.createAnnotation({
				latitude : drinkobj.latitude,
				longitude : drinkobj.longitude,
				title : "Appcelerator Headquarters",
				subtitle : 'Mountain View, CA',
				pincolor : Titanium.Map.ANNOTATION_RED,
				animate : true,
				leftButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
				myid : 1 // Custom property to uniquely identify this annotation.
			});

			return annotationPoint;
		};

		for (var i = 0; i < data.length; i++) {
			annotationPointArray[i] = new createAnnotationPoint(data[i]);
		}

		// var annotationPoint = Titanium.Map.createAnnotation({
		// latitude : 43.645972,
		// longitude : -79.399079,
		// title : "Appcelerator Headquarters",
		// subtitle : 'Mountain View, CA',
		// pincolor : Titanium.Map.ANNOTATION_RED,
		// animate : true,
		// leftButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
		// myid : 1 // Custom property to uniquely identify this annotation.
		// });

		var mapview = Titanium.Map.createView({
			mapType : Titanium.Map.STANDARD_TYPE,
			animate : true,
			regionFit : true,
			userLocation : true,
			annotations : annotationPointArray
		});

		var mapFocusPoint = {
			latitude : currentlatitude,
			longitude : currentlongitude,
			latitudeDelta : 0.010,
			longitudeDelta : 0.018
		};
		mapview.setLocation(mapFocusPoint);

		mapwin.addEventListener('open', function(e) {
			var mapFocusPoint = {
				latitude : currentlatitude,
				longitude : currentlongitude,
				latitudeDelta : 0.010,
				longitudeDelta : 0.018
			};
			mapview.setLocation(mapFocusPoint);
		});

		// annotationPoint.addEventListener('click', function() {
		// });

		mapwin.add(mapview);
		return mapwin;
	};
	//load the mapwindow by clicking the button
	function loadByButton() {

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

		var annotationPoint = Titanium.Map.createAnnotation({
			latitude : sourceID.latitude,
			longitude : sourceID.longitude,
			title : sourceID.bar,
			subtitle : sourceID.location,
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
			annotations : [annotationPoint]
		});

		var mapFocusPoint = {
			latitude : currentlatitude,
			longitude : currentlongitude,
			latitudeDelta : 0.010,
			longitudeDelta : 0.018
		};
		mapview.setLocation(mapFocusPoint);

		mapwin.addEventListener('open', function(e) {

			var mapFocusPoint = {
				latitude : sourceID.latitude,
				longitude : sourceID.longitude,
				latitudeDelta : 0.010,
				longitudeDelta : 0.018
			};
			mapview.setLocation(mapFocusPoint);
		});

		annotationPoint.addEventListener('click', function() {
		});

		mapwin.add(mapview);
		return mapwin;
	}

	if (sourceID) {
		mapwin = new loadByButton();
	} else {
		mapwin = new loadbyTab();
	}

	return mapwin;
}
module.exports = mapWindow;
