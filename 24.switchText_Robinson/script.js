// Array of sentences to be displayed in the text box
const sentences = [
    "This is a red light box",
    "This was used to make a short film",
    "My bedroom was colored red when I was a kid",
	"You turn red when you're angry",
    "Everything in the world is red, you just have to dig deep enough",
];

// Get reference to the text element where sentences will be displayed
const textElement = document.getElementById('dynamic-text');

// Counter to keep track of which sentence to display
let counter = 0;

// Add event listener to the image, so clicking it changes the text
document.getElementById('interactive-img').addEventListener('click', function() {
    // Change the text in the text box to the next sentence in the array
    textElement.textContent = sentences[counter];

    // Increment counter and reset if it exceeds the array length
    counter = (counter + 1) % sentences.length;
});// JavaScript Document