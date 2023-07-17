const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const miliSecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let isPause = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPause) {
      miliSeconds += 10;
      if (miliSeconds === 1000) {
        seconds++;
        miliSeconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      miliSecondsEl.textContent = formatMiliseconds(miliSeconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTimer() {
  isPause = true;
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function continueTimer() {
  isPause = false;
    pauseBtn.style.display = "block";
    resetBtn.style.display = "block"
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliSeconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  miliSecondsEl.textContent = "000";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
  return time < 100 ? `${time}`.padstart(3, "0") : time;
}
