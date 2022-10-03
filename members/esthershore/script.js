function redirect(url) {
    window.location.href = url;
}

function refresh() {
    window.location.reload();
}

let i = 0;
let text = "click to pop...";
let speed = 100;

function typeWriter() {
    if (i < text.length) {
      document.getElementById("info").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

function makeButtons(num) {
    for (let i = 1; i <= num; i++) {
        bubble = document.createElement("button");
        bubble.textContent = "pop";
        bubble.setAttribute("class", "bubble-button");
        bubble.setAttribute("id", "bubble-button" + i);
        let container = document.getElementById("bubble-container");
        container.append(bubble);
        bubble.onclick = () => pop(i);
    }
}

let popCount = 0;
function pop(i) {
    popCount++;
    document.getElementById("info").innerHTML = "pops: " + popCount;
    let popped = document.getElementById("bubble-button" + i);
    let buttonColor = document.getElementById("bubble-button1").style.color;
    popped.style.background = buttonColor; //"#2C3333";
    // popped.style.filter = "brightness(80%)";
    popped.style.opacity = "30%";
    popped.style.color = "white"; //"#D3E0DD";
    popped.disabled = true; 
    if (popCount == 88) {
        alert("Congrats, you popped all the bubbles!");
    }
}

function lightMode() {
    document.body.classList.toggle("light-mode");
}
