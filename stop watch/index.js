// Timer
let timer;
let timerRunning = false;
let timerDisplay = document.getElementById('timer-display');
let startTimerButton = document.getElementById('start-timer');
let stopTimerButton = document.getElementById('stop-timer');
let resetTimerButton = document.getElementById('reset-timer');

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timerDisplay.textContent = '00:00:00';
}

function updateTimer() {
    let time = timerDisplay.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    timerDisplay.textContent = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}


// Stopwatch
let stopwatch;
let stopwatchRunning = false;
let stopwatchDisplay = document.getElementById('stopwatch-display');
let startStopwatchButton = document.getElementById('start-stopwatch');
let stopStopwatchButton = document.getElementById('stop-stopwatch');
let resetStopwatchButton = document.getElementById('reset-stopwatch');

startStopwatchButton.addEventListener('click', startStopwatch);
stopStopwatchButton.addEventListener('click', stopStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatch = setInterval(updateStopwatch, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    stopwatchDisplay.textContent = '00:00:00';
}

function updateStopwatch() {
    let time = stopwatchDisplay.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    stopwatchDisplay.textContent = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}
