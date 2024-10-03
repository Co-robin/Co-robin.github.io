const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

slideshow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
});