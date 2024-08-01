let timerInterval;
let timerSeconds = 0;

function startTutorial() {
    alert("Starting AI tutorial for Algebra...");
    // Implement the function to start the AI tutorial
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds++;
        document.getElementById('timer').textContent = formatTime(timerSeconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    document.getElementById('timer').textContent = formatTime(timerSeconds);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
