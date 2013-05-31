var commonWindow = require('ui/iphone/ApplicationWindow');
var Data = require('ui/common/DAL');

function glossaryWindow() {
	var data = Data.readTrombData('glossary');
	var self = new commonWindow();
	//var term = ['Bananas', 'Strawberries', 'Mangos', 'Grapes'];
	var description = ['look like a d', 'look like a o', 'look like a long o', 'look like a small o'];
	var descriptionText = Ti.UI.createLabel({
		top:0,
		text:description[0],
		color:'white',
	});
	self.add(descriptionText);
	var column = Ti.UI.createPickerColumn();

	for (var i = 0, ilen = data.length; i < ilen; i++) {
		var row = Ti.UI.createPickerRow();

		var label = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : 20,
				fontWeight : 'bold'
			},
			text : data[i].term,
			textAlign : 'left',
			height : 'auto',
			width : 'auto'
		});

		row.add(label);
		column.addRow(row);
	}

	var picker = Ti.UI.createPicker({
		bottom : 0,
		columns : [column],
		selectionIndicator : true
	});
	picker.addEventListener('change', function(e) {
		descriptionText.text = data[e.rowIndex].description;
	});
	self.add(picker);

	return self;
};

module.exports = glossaryWindow;
