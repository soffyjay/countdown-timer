const days = document.getElementById("das")
const hours = document.getElementById("hour")
const mins = document.getElementById("min");
const secs = document.getElementById("sec");

const currentYear = new Date().getFullYear();
const currentTime = new Date();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function countDown() {
    const currentTime = new Date();
    const timeDiff = newYearTime - currentTime;
    const d = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const h = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
    const m = Math.floor(timeDiff / 1000 / 60) % 60;
    const s = Math.floor(timeDiff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;



}
setInterval(countDown, 1000);