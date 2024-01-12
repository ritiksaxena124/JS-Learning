let panelBtm = document.querySelector("#pbtm");
let bubbleSet = "";

onLoad();

function onLoad() {
    showBubblesInPanel();
}

function showBubblesInPanel() {
    for (let i = 1; i <= 70; i++) {
        let randomNumber = Math.floor(Math.random() * 70) + 1;
        let bubble = `<div class="bubble"><span class="number">${randomNumber}</span></div>`
        bubbleSet += bubble;
    }
    panelBtm.innerHTML = bubbleSet;
}
