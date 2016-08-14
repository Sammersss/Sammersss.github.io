function getDate() {
	var dayArray=new Array("неділя","понеділок","вівторок","середа","четвер","пятниця","субота");
	var monthArray=new Array("січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопа","грудня");

	var ndata=new Date();
	var day=dayArray[ndata.getDay()];
	var month=monthArray[ndata.getMonth()];
	var date=ndata.getDate();
	var year=ndata.getFullYear();
	var hours = ndata.getHours();
	var mins = ndata.getMinutes();
	var secs = ndata.getSeconds();
	var greeting;

	//По надобности условие ниже повторить с minutes и hours

	if (hours < 10) {hours = "0" + hours };
	if (mins < 10) {mins = "0" + mins };
	if (secs < 10) {secs = "0" + secs };

	if (hours>=5 && hours<12) greeting = "Доброго ранку ! ";else {if (hours>=12 && hours<18) greeting = "Доброго дня ! ";else {if (hours>=18 && hours<24) greeting = "Доброго вечора ! ";else {if (hours>=0 && hours<5) greeting = "Доброї ночі ! "}}};

	document.getElementById('daydisplay').innerHTML =(greeting+'&nbsp;'+' &nbsp;<span class="fa fa-calendar"></span> &nbsp;Сьогодні &nbsp;:&nbsp;' + day + '&nbsp;' + date + '&nbsp;' + month + '&nbsp;' + year + '&nbsp; року');
	document.getElementById('timedisplay').innerHTML =('<span class="fa fa-clock-o"></span>'+'&nbsp;&nbsp;'+hours + ':' + mins + ':' + secs);
}
setInterval(getDate, 0);
