//Variables
var num1 = 0;
var num2 = 0; 
var numString = "";

//Ajax stuff. Hope this works...
function createRequestObject(){
	var ro;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		ro = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		ro = new XMLHttpRequest();
	}

	return ro;
}

//Our request object, http
var http = createRequestObject();

function pressDigit(value){
	switch(value){
		case "0": { numString += "0"; break; }
		case "1": { numString += "1"; break; }
		case "2": { numString += "2"; break; }
		case "3": { numString += "3"; break; }
		case "4": { numString += "4"; break; }
		case "5": { numString += "5"; break; }
		case "6": { numString += "6"; break; }
		case "7": { numString += "7"; break; }
		case "8": { numString += "8"; break; }
		case "9": { numString += "9"; break; }
	}
}


function testalert(){
alert("OK");
}

function testalert2(){
alert("ALSO OK");
}
