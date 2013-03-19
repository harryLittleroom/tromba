var commonWindow = require('ui/handheld/ApplicationWindow');

function bartendersWindow(commonProperties) {
	var self = new commonWindow();

	var bartenderImage = getImageByFileName('/images/iphoneImage/bartenderRow.jpg')

	var scrollView = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : '80%',
		width : '100%',
		top : self.children[0].height
	});

	for (var i = 0; i < 10; i++) {
		var view = Titanium.UI.createView({
		backgroundImage : '/images/iphoneImage/bartenderRow.jpg',
		width : platformWidth,
		height : bartenderImage.height * platformWidth / bartenderImage.width,
		top : bartenderImage.height * platformWidth / bartenderImage.width * i,
		});
		view.addEventListener('click', function() {
		//Ti.API.log(self.tabGroup);
		
		var win = new commonWindow();

			var button = Titanium.UI.createButton({
				title : 'Open new window',
				top : 40,
				height : 40,
				width : 200
			});
			button.addEventListener('click',function(){
				win.close();
			})
			win.add(button);

			var winview = Ti.UI.createView({
				backgroundColor : 'yellow',
				height : 100
			});
			win.add(winview);
			self.containingTab.open(win);
		
		
		// var self = Titanium.UI.createWindow({
		// backgroundColor:"white",
		// height:200,
		// width:200,
		// top:10
		// });
		// self.addEventListener('blur',function(e){
		// Ti.API.log(e.source.backgroundColor);
		// Ti.API.log(self);
		// })
		// self.open();
		
		
		
		// var bartenderWindow = new commonWindow('myTitle');
		// bartenderWindow.open();
		})
		scrollView.add(view);




		// var button = Titanium.UI.createButton({
			// title : 'Open new window',
			// top : 140,
			// height : 40,
			// width : 200,
			// zIndex : 999
		// });
		// self.add(button);
		// button.addEventListener('click', function(e) {
			// var win = new commonWindow();
// 
			// var button = Titanium.UI.createButton({
				// title : 'Open new window',
				// top : 40,
				// height : 40,
				// width : 200
			// });
			// button.addEventListener('click',function(){
				// win.close();
			// })
			// win.add(button);
// 
			// var winview = Ti.UI.createView({
				// backgroundColor : 'yellow',
				// height : 100
			// });
			// win.add(winview);
			// //self.containingTab.open(win);
			// self.containingTab.open(win, {
				// animated : true
			// });
		// })
	}

	self.add(scrollView);
	return self;
};

module.exports = bartendersWindow;
