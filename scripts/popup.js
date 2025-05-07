var email = "harel.fishgrund@skai.io";
if(email.toLowerCase().endsWith("@skai.io") || email.toLowerCase().endsWith("@kenshoo.com")) {
	document.getElementById('Categories').style.display="block";
}
else {
	document.getElementById('Categories').style.display="none";
}
