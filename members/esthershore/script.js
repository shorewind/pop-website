// function to animate text typing effect
function typeWriter() {
    const textElement = document.getElementById("info");
    const text = "click to pop...";
    const speed = 100;
    let i = 0;

    function typeNextCharacter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeNextCharacter, speed);
        }
    }

    typeNextCharacter();
}

// function to create buttons with "pop" text
function makeButtons(n) {
    const container = document.getElementById("bubble-container");
    for (let i = 1; i <= n; i++) {
        const bubble = document.createElement("button");
        bubble.textContent = "pop";
        bubble.setAttribute("class", "bubble-button");
        bubble.setAttribute("id", "bubble-button" + i);
        container.append(bubble);
        bubble.onclick = () => handlePop(i);
    }
    for (let n = 1; n <= TOTAL_BUBBLES; n++) {
        bubbleNums.push(n);
    }
}

// initialize array of bubble numbers
const TOTAL_BUBBLES = 88;
let bubbleNums = [];


// handles the popping of a bubble
let popCount = 0;
function handlePop(i) {
    bubbleNums = bubbleNums.filter(num => num != i);
    const popped = document.getElementById("bubble-button" + i);
    popped.style.color = "#D3E0DD";
    popped.style.background = "#2C3333";
    popped.disabled = true;
    if (popCount < TOTAL_BUBBLES) {
        popCount++;
        document.getElementById("counter").innerHTML = "pops: " + popCount;
    }
    if (popCount == TOTAL_BUBBLES) {
        document.getElementById("info").innerHTML = "Congrats, you popped all the bubbles!";
    }
}

// pops a random bubble of remaining unpopped bubbles
function randomPop() {
    if (popCount < TOTAL_BUBBLES) {
        const bubbleNum = bubbleNums[Math.floor(Math.random()*bubbleNums.length)];
        handlePop(bubbleNum);
        bubbleNums = bubbleNums.filter(num => num != bubbleNum);
    }
}

// creates button on window load
window.addEventListener("load", () => {
    makeButtons(TOTAL_BUBBLES);
});

// refresh screen on Enter, random pop on Space
window.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        document.getElementById("refresh-button").click();
    } else if(event.key == ' '){
        randomPop();
    }
});
