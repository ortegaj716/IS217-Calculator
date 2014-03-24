//Variables
var num1 = "";
var num2 = "";
var numString = "";
var operation = "";

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

	setDisplay(numString);
}

//Convenience functions
function checkNumString(){
	if(numString == "")
	numString = "0";
}

function setDisplay(set){
	document.getElementById('divDisplay').innerHTML = set;
}

function disableOperations(){
	document.getElementById('idAddition').disabled = true;
	document.getElementById('idSubtraction').disabled = true;
	document.getElementById('idMultiplication').disabled = true;
	document.getElementById('idDivision').disabled = true;
	document.getElementById('idEquals').disabled = false;
}

function disableEquals(){
	document.getElementById('idAddition').disabled = false;
	document.getElementById('idSubtraction').disabled = false;
	document.getElementById('idMultiplication').disabled = false;
	document.getElementById('idDivision').disabled = false;
	document.getElementById('idEquals').disabled = true;
}

//Poorly programmed! Do better next time.
function addition(){
	if(operation == ""){
		checkNumString();
		num1 = numString;
		operation = "+";
		numString = "";
		disableOperations();
	}
}

function subtraction(){
	if(operation == ""){
		checkNumString();
		num1 = numString;
		operation = "-";
		numString = "";
		disableOperations();
	}
}

function multiplication(){
	if(operation == ""){
		checkNumString();
		num1 = numString;
		operation = "*";
		numString = "";
		disableOperations();
	}
}

function division(){
	if(operation == ""){
		checkNumString();
		num1 = numString;
		operation = "/";
		numString = "";
		disableOperations();
	}
}


function calClear(){
numString = "";
num1 = "";
num2 = "";
operation = "";
setDisplay("");
disableEquals();
}

function equals(){
	var url = "";
	switch(operation){
		case "+": { url = "/add"; break; }
		case "-": { url = "/subtract"; break; }
		case "*": { url = "/multiply"; break; }
		case "/": { url = "/divide"; break; }
	}
	checkNumString();
	http.open('get',url + "?num1=" + num1 + "&num2=" + numString + "&junk=" + Math.random());
	http.onreadystatechange = handleResult;
	http.send(null);	
}

function handleResult(){
	if(http.readyState == 4){
		var response = http.responseText;
		calClear();
		setDisplay(response);
	}
}

function testAjax(a){
	http.open('get','http://localhost:3000/test?a=ItWorks&junk=' + Math.random());
	http.onreadystatechange = handleTest;
	http.send(null);
}

function handleTest(){
	if(http.readyState == 4){
		var response = http.responseText;
		alert(response);
	}
}
