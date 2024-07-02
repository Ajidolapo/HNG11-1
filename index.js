// var time = document.getElementById("time");
let CurrentTime = new Date();
const timestamp = CurrentTime.toUTCString();

document.getElementById("time").textContent = timestamp;
// console.log(timestamp)

//Day of the Week
const weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const today = weekDays[CurrentTime.getDay()]
document.getElementById("day").textContent = "Today is " + today