
  function check_validation(){
  var check=document.getElementById("FName").value;
 if (check.indexOf("a")==-1||check.indexOf("d")==-1||check.indexOf(" ")>-1) 
{	
	var f=document.createElement("h4");
	f.innerHTML="Wrong input at your name!!!!";
	f.style.color='red';
	var g=document.getElementById("myform");
	g.appendChild(f);
	return false;
}
return true;
}