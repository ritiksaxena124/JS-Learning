let panelBtm = document.querySelector("#pbtm");
let score = 0;
let hitVal; 

onLoad();

function onLoad() {
    setHit();
    showBubblesInPanel();
    runTimer();
    document.querySelector("#score-count").textContent = score;
}

function showBubblesInPanel() {
    let bubbleSet = "";
    for (let i = 1; i <= 70; i++) {
        let randomNumber = Math.floor(Math.random() * 70) + 1;
        let bubble = `<div class="bubble"><span class="number">${randomNumber}</span></div>`
        bubbleSet += bubble;
    }
    panelBtm.innerHTML = bubbleSet;
}


function runTimer() {
    let timer = 30;
    let timerVal = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer-count").innerHTML = timer;
        } else {
            clearInterval(timerVal);
            document.querySelector("#pbtm").innerHTML = `<div id="end-state"><h1>Your Score is ${score}</h1>
            <button id="btn" onclick="retry()">Retry</button></div>
            `;
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.querySelector("#score-count").textContent = score;
}

function setHit() {
    hitVal = Math.floor(Math.random() * 70) + 1;
    document.querySelector("#hit-val").textContent = hitVal;
}

function retry() {
    score = 0;
    document.querySelector("#score-count").textContent = score;
    setHit();
    showBubblesInPanel();
    runTimer();
}

document.querySelector("#pbtm").addEventListener("click", (e) => {
    let hit_val = Number(e.target.textContent);
    if(hit_val === hitVal){
        increaseScore();
        showBubblesInPanel()
        setHit();
    }
})
