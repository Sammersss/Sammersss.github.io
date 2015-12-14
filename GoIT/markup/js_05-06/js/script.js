var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

var timeTable = document.createElement('p');
timeTable.setAttribute('id', 'output');
timeTable.innerHTML = '00:00:00:000';
var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(timeTable);

var div = document.createElement('div');
div.setAttribute('id','controls');
var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(div);

var startBtn = document.createElement('button');
startBtn.setAttribute('id', 'startPause');
startBtn.innerHTML = 'Start';
startBtn.addEventListener("click", startTimer);
var controls = document.getElementById('controls');
controls.appendChild(startBtn);


var reset = document.createElement('button');
controls.appendChild(reset);
reset.classList.add('reset');
reset.innerHTML = 'Reset';
reset.addEventListener("click", resetTimer);



var slise = document.createElement('button');
controls.appendChild(slise);
slise.classList.add('slise');
slise.innerHTML = 'Slise';
slise.addEventListener("click", sliseTimer);

var divSlise = document.createElement('div');
divSlise.setAttribute('id','tm2');
var controls = document.getElementById('controls');
controls.appendChild(divSlise);


var startDate = new Date(0, 0),
seconds = 0,
minutes = 0,
hours = 0,
timer,
time;


function DisplayTime() {
	startDate.setMilliseconds( startDate.getMilliseconds() + 4);
	var milliseconds = startDate.getMilliseconds();

	
		if ( milliseconds === 996) {
			seconds = ++seconds;
		} 
		if (seconds >= 60) {
			seconds = 0;
			minutes = ++minutes;
		} 
		if (minutes >= 60) {
			minutes = 0;
			hours = ++hours;
		} 
		if (seconds < 10) {
			secondsNum = '0' + seconds;
		} else {
			secondsNum = seconds;
		}
		if (minutes < 10) {
			minutesNum = '0' + minutes;
		} else {
			minutesNum = minutes;
		}
		if (hours < 10) {
			hoursNum = '0' + hours;
		} else {
			hoursNum = hours;
		}
		while(milliseconds.toString().length < 3){
			milliseconds = '0' + milliseconds;
		}

	time = hoursNum + ':' + minutesNum + ':' + secondsNum + ':' + milliseconds;
	timeTable.innerHTML = time;
	return time;
}

function startTimer(){
	startBtn.innerHTML = 'Pause';
	timer = setInterval(DisplayTime, 4);
	startBtn.removeEventListener("click", startTimer);
	startBtn.addEventListener("click", pauseTimer);
}

function pauseTimer(){
	startBtn.innerHTML = 'Continue';
	clearInterval(timer);
	timeTable.innerHTML = time;
	startBtn.removeEventListener("click", pauseTimer);
	startBtn.addEventListener("click", startTimer);
}

function resetTimer(){
	startBtn.innerHTML = 'Start';
	timeTable.innerHTML = '00:00:00:000';
	clearInterval(timer);
	startBtn.removeEventListener("click", pauseTimer);
	startBtn.addEventListener("click", startTimer);
	document.getElementById("tm2").innerHTML = "";
	startDate = new Date(0, 0);
	seconds = 0;
	minutes = 0;
	hours = 0;
}
function sliseTimer() {
    document.getElementById("tm2").innerHTML
    += " | " + document.getElementById("output").innerHTML + " | ";


}