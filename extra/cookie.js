/**
 * 
 */
var uInput = document.getElementById('TextArea').value;

function setCookie(){
	document.cookie = "newCookie="+uInput;
	
}

function getCookie() {
	  var name =  "newCookie=";
	  var ca = document.cookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}

function showCookie(){
	var cook = getCookie();
	if(cook != ""){
		alert("Cookie saved: "+cook);
	}
	else{
		alert("No current cookies.")
	}
}

