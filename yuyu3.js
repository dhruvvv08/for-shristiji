const text = `
• The way you smile for no reason 😊
• The way you pretend to be angry but look cute instead 😤
• The way you make my day better just by existing
• The way you steal my food and still look innocent 🍟
• The way you turn normal moments into memories
• And most importantly…
  the way you love me ❤️
`;

let index = 0;
function typeWriter() {
    if (index < text.length) {
        typeText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
    }
}
setTimeout(typeWriter, 1500);
