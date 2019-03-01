function startDataUpload() {
	alert ("start data upload")
// 19-3-1 @12;31 amending function to get values from form and post mit to server

	var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var module = document.getElementById("module").value;
    var postString = "name=" + name + "&surname=" + surname + "&module=" + module;

	// 19-3-3 @12:37 adding code for pop up alert

	alert (postString);

    // 19-3-1 @ 13;17 confirm that function actually runs

    
    processData(postString);

}

// 19-3-1 @13;03 adding global variable to hold Ajax request

var client; 

// 190-3-1 @13;04 creating function to issue AJAX request

function processData(postString){
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30296/reflectData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
p}

// 19-3-1 @13:04 creating code to wait for response from server and process response once it is received

function dataUploaded(){
	// function listens for server to say data is readyState
	if (client.readyState === 4){
		// change data upload result DIV to show response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}
