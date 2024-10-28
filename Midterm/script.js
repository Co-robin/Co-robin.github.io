// Define an array of background images
const images = [
    'images/image01.jpg',
    'images/image02.jpg',
    'images/image03.jpg',
    'images/image04.jpg',
    'images/image05.jpg',
    'images/image06.jpg',
    'images/image07.jpg',
    'images/image08.jpg',
    'images/image09.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg'
];

// Function to change the background image
function changeBackground(imageIndex) {
    document.body.style.backgroundImage = `url('${images[imageIndex]}')`;
}

// Use IntersectionObserver to detect when each text box is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const boxId = entry.target.id;
            // Extract the number from the text box ID (e.g., "box1" becomes 1)
            const index = parseInt(boxId.replace('box', '')) - 1;
            changeBackground(index);  // Change the background image
            entry.target.classList.add('show');  // Make the text box visible
        } else {
            entry.target.classList.remove('show');  // Hide the text box when not in view
        }
    });
}, { threshold: 0.5 }); // 0.5 means the text box needs to be 50% in view

// Observe all the text boxes
document.querySelectorAll('.text-box').forEach(box => {
    observer.observe(box);
});