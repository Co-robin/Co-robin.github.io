// Select the video and audio elements
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const audio = document.getElementById('background-audio');
const overlay = document.getElementById('overlay');

// Set the initial active video
let currentVideo = 1;
video1.classList.add('active');

// Add click event listener to start audio and toggle videos
document.body.addEventListener('click', () => {
  // Start the audio on first click if it isn't already playing
  if (audio.paused) {
    audio.play();
    overlay.style.display = 'none'; // Hide the overlay
  }

  // Toggle between videos
  if (currentVideo === 1) {
    video1.classList.remove('active');
    video2.classList.add('active');
    currentVideo = 2;
  } else {
    video2.classList.remove('active');
    video1.classList.add('active');
    currentVideo = 1;
  }
});