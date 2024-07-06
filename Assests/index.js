document.addEventListener("DOMContentLoaded", () => {
    const currentTimeElement = document.getElementById("current-time");
    const currentDayElement = document.getElementById("current-day");

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

