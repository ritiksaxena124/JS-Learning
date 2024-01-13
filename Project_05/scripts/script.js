let panelBtm = document.querySelector("#pbtm");
let bubbleSet = "";
let timer = 60;
let score = 0;
let hitVal; 

onLoad();

function onLoad() {
    setHit();
    showBubblesInPanel();
    runTimer();
    setScore();
}

function showBubblesInPanel() {
    for (let i = 1; i <= 70; i++) {
        let randomNumber = Math.floor(Math.random() * 70) + 1;
        let bubble = `<div class="bubble"><span class="number">${randomNumber}</span></div>`
        bubbleSet += bubble;
    }
    panelBtm.innerHTML = bubbleSet;
}


function runTimer() {
    let timerVal = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer-count").innerHTML = timer;
        } else {
            clearInterval(timerVal);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function setScore() {
    document.querySelector("#score-count").textContent = score;
}

function setHit() {
    hitVal = Math.floor(Math.random() * 70) + 1;
    document.querySelector("#hit-val").textContent = hitVal;
}


