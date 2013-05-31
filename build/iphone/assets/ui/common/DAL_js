//get app data from tromba cms api
//callback is the function you will passs after finish loading the data
//the collection is the name of collection at the end of api, such as drinks
var collectionName;
exports.getAppData = function(name,callback) {
	collectionName = name;
	var url = "http://wf-tromba-staging.littleroominc.com/"+collectionName+'/';
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			//console.log(this.responseText);
			callback(this.responseText);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			console.log(e.error);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

//store the data locally
exports.storeData = function(data) {
	// console.log("---------------");
	// console.log(collectionName);
	var trombaDataDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'trombaData');
	if (! trombaDataDir.exists()) {
		trombaDataDir.createDirectory();
	}
	var trombaDataFile = Ti.Filesystem.getFile(trombaDataDir.resolve(), 'data' +collectionName+ '.js');
	trombaDataFile.write(data)
}

//read the data from the 
//name is name of collection, for example, drinks, glossary, story
exports.readTrombData = function(name){
	file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "trombaData/"+"data"+name+".js");
	var blob = file.read();
	if(blob){
		var readText = JSON.parse(blob.text);
		return readText;
	}
	else{
		alert('Tromba:you must have internet connection for the first time');
		return
	}
	
};

exports.parseHtml = function(htmlData){
	var newdata = htmlData.replace(/<li>/g,'\uE331').replace(/<\/\li>/g,'\n').replace(/<ul>/g,'');
	return newdata
}
