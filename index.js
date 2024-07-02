const formatTime12Hour = (date) => {
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    return strTime;
};
const showTime = () => {
    const currentTime = new Date();
    const timestamp = formatTime12Hour(currentTime);
    document.getElementById("time").textContent = timestamp;
};
const displayDayOfWeek = () => {
    const currentTime = new Date();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = weekDays[currentTime.getUTCDay()];
    document.getElementById("day").textContent = "Today is " + today;
};
const startClock = () => {
    showTime();
    displayDayOfWeek();
    setInterval(showTime, 1000);
};
startClock();
