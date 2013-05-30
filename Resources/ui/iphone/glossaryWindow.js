var commonWindow = require('ui/iphone/ApplicationWindow');

function glossaryWindow() {
	var self = new commonWindow();

	var term = ['Bananas', 'Strawberries', 'Mangos', 'Grapes'];
	var description = ['look like a d', 'look like a o', 'look like a long o', 'look like a small o'];
	var descriptionText = Ti.UI.createLabel({
		top:0,
		text:description[0],
		color:'white',
	});
	self.add(descriptionText);
	var column = Ti.UI.createPickerColumn();

	for (var i = 0, ilen = term.length; i < ilen; i++) {
		var row = Ti.UI.createPickerRow();

		var label = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : 20,
				fontWeight : 'bold'
			},
			text : term[i],
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
		console.log('selected row index = '+e.rowIndex);
		descriptionText.text = description[e.rowIndex];
	});
	self.add(picker);

	return self;
};

module.exports = glossaryWindow;
