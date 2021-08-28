const date0 = () => {
	const time = new Date();
	var ampm = time.getHours() >= 12 ? ' PM' : ' AM';
	let hours = time.getHours() % 12;
	let times = time.getMinutes();
	let fullTime = hours + ':' + times + ampm;
	let fullTime1 = hours + 2
    + ':' + times + ampm;
	let fullTime2 = hours + 3 + ':' + times + ampm;
	let fullTime3 = hours + 4 + ':' + times + ampm;
	// console.log(fullTime);
	document.getElementById('date1').innerHTML = fullTime;
	document.getElementById('date2').innerHTML = fullTime1;
	document.getElementById('date3').innerHTML = fullTime2;
	document.getElementById('date4').innerHTML = fullTime3;
};
date0();
