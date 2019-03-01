function startDataUpload() {
	alert ("start data upload")
// 19-3-1 @12;31 amending function to get values from form and post mit to server

	var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var module = document.getElementById("module").value;
    var postString = "name=" + name + "&surname=" + surname + "&module=" + module;
alert (postString);


}