
exports.getAppData = function(callback) {
	var url = "http://wf-tromba-staging.littleroominc.com/catalogue/pages";
	function getData(data) {
		return data;
	}

	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			callback(this.responseText);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert(e.error);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}
exports.storeData = function(data) {
	var trombaDataDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'trombaData');
	if (! trombaDataDir.exists()) {
		trombaDataDir.createDirectory();
	}
	var trombaDataFile = Ti.Filesystem.getFile(trombaDataDir.resolve(), 'data' + '.js');
	trombaDataFile.write(data)
}

exports.readTrombData = function(){
	file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "trombaData/data.js");
	var blob = file.read();
	var readText = JSON.parse(blob.text);
	return readText;
};

exports.parseHtml = function(htmlData){
	var newdata = htmlData.replace(/<li>/g,'\uE331').replace(/<\/\li>/g,'\n').replace(/<ul>/g,'');
	return newdata
}
