function set_display() {
	display((new Date()).getTime())
}

function display(num) {
	var express = new Date(num);
	var midnight = new Date(
		express.getFullYear(),
		express.getMonth(),
		express.getDate(),0,0,0
		)
	num = Math.floor((express.getTime() - midnight.getTime()) / 450000);

	$('#message').text((new Date(num * 450000)).toString('HH:mm:ss'));

	for(i=6;i>0;i--) {
		//console.log(i,num & 1,num)
		turn(i,((num & 1) == 1));
		num = Math.floor(num / 2);
	}
}

function turn(i,turnon) {
	turnon = typeof(turnon) != 'undefined' ? (turnon == true) : (!$('#bit'+i).hasClass('on'));;

	$('#bit'+i).stop();
	if (turnon) {
		$('#bit'+i).removeClass('off');
		$('#bit'+i).addClass('on');
	} else {
		$('#bit'+i).addClass('off');
		$('#bit'+i).removeClass('on');
	}
}


function initialise(v) {
	clearInterval(interval);
	set_display();
	interval = setInterval(set_display,1001);
	
}

var interval;
var mousedown_on_bit = false;

$(document).bind('ready',function() {
	initialise(0);
});