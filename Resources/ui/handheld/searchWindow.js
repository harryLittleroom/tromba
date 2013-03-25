var commonWindow = require('ui/handheld/ApplicationWindow');

function searchWindow(commonProperties) {
	var self = new commonWindow();
	self.index = 3;
	var textBox = Ti.UI.createTextField({
		width:platformWidth*0.8,
		height:30,
		top:20,
		borderRadius:10,
		hintText:'Enter Keywords',
		backgroundColor:'white',
		paddingLeft:10,
		autocorrect:false,
		clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
	});
	
	//textBox.clearButtonMode = UITextFieldViewModeWhileEditing;
	
	self.add(textBox);
	
	return self;
};

module.exports = searchWindow;
