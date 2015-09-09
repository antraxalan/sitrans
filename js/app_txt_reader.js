document.addEventListener("deviceready", init, false);
function init() {
	// alert('incio');
	console.log(cordova.file.applicationDirectory);	
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory, function(f) {
		console.dir(f);
	}, fail);

	//This alias is a read-only pointer to the app itself
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "index.html", gotFile, fail);

	/* Yes, this works too for our specific example...
	$.get("index.html", function(res) {
		console.log("index.html", res);
	});
	*/

}

function fail(e) {
	alert('error: '+ e.description);
	alert('num: '+ e.number);
	console.log("FileSystem Error");
	console.dir(e);
}

function gotFile(fileEntry) {
	alert('got');
	fileEntry.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			console.log("Text is: "+this.result);
			document.querySelector("#textArea").innerHTML = this.result;
		}

		reader.readAsText(file);
	});

}