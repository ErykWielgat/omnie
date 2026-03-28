const textArray = ["STUDIUJĘ INFORMATYKĘ.", "TWORZĘ NOWOCZESNY KOD.", "ZDOBYWAM SZCZYTY."];
let textIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

const typingSpeed = 80;
const eraseSpeed = 40;
const delayAfterWord = 2000;

function typeWriter() {
    if (charIndex < textArray[textIndex].length) {
        typewriterElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(eraseText, delayAfterWord);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeWriter, 500);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 500);
};