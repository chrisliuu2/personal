function displayTime () {
	var date = new Date();
	var hrs = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
	var session = document.getElementById('session');

	if (hrs >= 12) {
		session.innerHTML = 'PM';
	} else {
		session.innerHTML = 'AM';
	}

	if (hrs > 12) {
		hrs = hrs - 12;
	}

	if (sec < 10) {
		sec = '0' + sec;
	}

	if (min < 10) {
		min = '0' + min;
	}

	document.getElementById('hours').innerHTML = hrs;
	document.getElementById('minutes').innerHTML = min
	document.getElementById('seconds').innerHTML = sec;

}

setInterval(displayTime, 10);

function vidPlay() {  
  $("#video1").get(0).play();  
};
function vidPause() {
	$("#video1").get(0).pause();
};
$(document).ready(function(){
  $("#textToggler").click(function(){
    $(".toggleText").toggle();
  });
});
function toggleImage() {
  $(".hiddenclickimg").toggle();
};