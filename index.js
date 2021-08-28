const tm = () => {
	const time = new Date();
	var ampm = time.getHours() >= 12 ? ' PM' : ' AM';
	let hours = time.getHours() % 12;
	let fullTime = hours + ':' + time.getMinutes() + ampm;
	console.log(fullTime);
	document.getElementById('date1').innerHTML = fullTime;
};
tm();
