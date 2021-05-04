const yearsEl = document.getElementById("years");
const weeksEl = document.getElementById("weeks");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const endTime = '13 June 2063';

countdown();

function countdown() {
 const endDate = new Date(endTime);
 const currentDate = new Date();

 const seconds = (Math.floor((endDate - currentDate)/1000))%60;
 const minutes = (Math.floor((endDate - currentDate)/60/1000))%60;
 const hours = (Math.floor((endDate - currentDate)/60/60/1000))%24;
 const days = (Math.floor((endDate - currentDate)/24/60/60/1000))%7;
 const weeks = (Math.floor((endDate - currentDate)/7/24/60/60/1000))%52;
 const years = Math.floor((endDate - currentDate)/52/7/24/60/60/1000);

yearsEl.innerHTML = years;
weeksEl.innerHTML = weeks;
daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;
}

setInterval(countdown, 1000);