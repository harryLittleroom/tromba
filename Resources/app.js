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
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	var windowArray;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		Window1 = require('ui/handheld/storyWindow');
		Window2 = require('ui/handheld/bartendersWindow');
		Window3 = require('ui/handheld/recommendWindow');
		Window4 = require('ui/handheld/searchWindow');
		windowArray = [Window1,Window2,Window3,Window4]		
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
//	new ApplicationTabGroup(windowArray).open();
	
	setTimeout(function() {
    new ApplicationTabGroup(windowArray).open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
}, 1000);

})();
