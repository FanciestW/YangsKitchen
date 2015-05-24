//Pop-up message
/*
$(window).load(function(){
	alert("This website is still under construction,\
	 please be patient we will have it fully furnished in no time.\
	 In the mean time feel Thank you!")
});
*/
function check(){
	var count1, count2, count3;
	count1 = parseInt(document.getElementById("btn1").value);
	count2 = parseInt(document.getElementById("btn2").value);
	count3 = parseInt(document.getElementById("btn3").value);
	if(count1 == 2 && count2 == 5 && count3 == 12){
		window.open("AW2512/birthday.html","_self")
	}
}

function clicker1(i){
	var strcount = document.getElementById("btn1").value;
	var count = parseInt(strcount) + i;
	if(count > 5){
		count = 0;
	}
	document.getElementById("btn1").value = count;
	document.getElementById("btn1").innerHTML = count;
	check();
}

function clicker2(i){
	var strcount = document.getElementById("btn2").value;
	var count = parseInt(strcount) + i;
	if(count > 10){
		count = 0;
	}
	document.getElementById("btn2").value = count;
	document.getElementById("btn2").innerHTML = count;
	check();
}

function clicker3(i){
	var strcount = document.getElementById("btn3").value;
	var count = parseInt(strcount) + i;
	if(count > 15){
		count = 0;
	}
	document.getElementById("btn3").value = count;
	document.getElementById("btn3").innerHTML = count;
	check();
}