/*
* A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.
* A starting point for tab-based application with multiple top-level windows.
* Requires Titanium Mobile SDK 1.8.0+.
*
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*
*/

//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {

	function loadComman() {
		Window1 = require('ui/iphone/storyWindow');
		Window2 = require('ui/iphone/drinkTypeWindow');
		Window3 = require('ui/iphone/recommendWindow');
		Window4 = require('ui/iphone/mapWindow');
		Window5 = require('ui/iphone/drinksListWindow');
		windowArray = [Window1, Window2, Window3, Window4, Window5]

		var Data = require('ui/common/DAL')
		if (Titanium.Network.networkType == Titanium.Network.NETWORK_NONE) {
			var data = Data.readTrombData();
			if (data) {
				var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
				setTimeout(function() {
					new ApplicationTabGroup(windowArray).open({
						transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
					});
				}, 1000);
			}
		} else {
			Data.getAppData(function(data) {
				Data.storeData(data);
			});

			var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
			//	new ApplicationTabGroup(windowArray).open();

			setTimeout(function() {
				new ApplicationTabGroup(windowArray).open({
					transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
				});
			}, 1000);

		}
	}

	function loadIphone() {

	}

	function loadAndroid() {

	}

	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));

	var Window;
	var windowArray;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	} else if (osname === 'android') {
		Window1 = require('ui/android/testwindow');
		Window2 = require('ui/android/testwindow');
		Window3 = require('ui/android/testwindow');
		Window4 = require('ui/android/testwindow');
		windowArray = [Window1, Window2, Window3, Window4]
		var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');

		ApplicationTabGroup(windowArray).open();
	} else {
		loadComman()
	}

})();
