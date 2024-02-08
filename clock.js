function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourString = (hours < 10 ? '0' : '') + hours;
    const minuteString = (minutes < 10 ? '0' : '') + minutes;
    const secondString = (seconds < 10 ? '0' : '') + seconds;

    const clockDiv = document.getElementById('clock');
    if (clockDiv) {
        clockDiv.innerHTML = `${hourString}:${minuteString}:${secondString}`;
    }
}

// Update the clock every second
setInterval(updateClock, 1000);
