// Эффект печати текста
const dynamicText = document.getElementById('dynamicText');
const cursor = document.getElementById('cursor');

// Текст для вывода
const messages = [
    "Initializing system...",
    "Accessing secure server...",
    "Loading data...",
    "Welcome, user.",
    "System ready. Enter command."
];

// Настройки анимации
let messageIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < messages[messageIndex].length) {
        dynamicText.textContent += messages[messageIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        messageIndex++;
        if (messageIndex < messages.length) {
            charIndex = 0;
            setTimeout(() => {
                dynamicText.textContent += "\n";
                typeEffect();
            }, 500);
        } else {
            cursor.style.display = "none";
        }
    }
}

typeEffect();

