// JavaScript code for video functionality

// Array to store video paths
const videos = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];
let videoIndex = 0; // Current index in the videos array
let isMuted = true; // Initial muted state

// Access the video player element
const videoPlayer = document.getElementById("videoPlayer");

// Function to change to a new random video
function changeVideo() {
  // Store the current playback time
  const currentTime = videoPlayer.currentTime;
  
  // Pick a random video index that is different from the current video
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * videos.length);
  } while (randomIndex === videoIndex);

  // Update the video source
  videoIndex = randomIndex;
  videoPlayer.src = videos[videoIndex];
  
  // Set playback time to the previously stored time
  videoPlayer.currentTime = currentTime;
  
  // Unmute if it's not the first video
  if (isMuted) {
    videoPlayer.muted = false;
    isMuted = false;
  }

  // Play the new video
  videoPlayer.play();
}

// Event listener to loop video playback at the end of each video
videoPlayer.addEventListener("ended", () => {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
});