function updateClock(){


	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();


	const hoursElement = document.getElementById("hours");
	const minutesElement = document.getElementById("minutes");
	const secondElement = document.getElementById("seconds");


	hoursElement.textContent = hours;
	minutesElement.textContent = minutes;
	secondElement.textContent = seconds;
	



}

setInterval(updateClock,1000);

