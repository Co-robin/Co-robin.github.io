// Array holding the video file paths
const videos = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];

// Select video element and initialize variables
const videoPlayer = document.getElementById("videoPlayer");
let lastPlayedTime = 0; // Store the last played time of the current video
let currentVideoIndex = 0; // Track the current video index
let isMutedInitially = true; // Track if the sound should be muted (initially true)

// Function to switch videos when the text box is clicked
function switchVideo() {
    // Unmute the video after the first click
    if (isMutedInitially) {
        videoPlayer.muted = false; // Unmute the video
        isMutedInitially = false;  // Set flag to false to prevent further muting
    }

    // Save the current playback time before switching
    lastPlayedTime = videoPlayer.currentTime;

    // Get a random index for the next video, ensuring it's different from the current video
    let nextVideoIndex;
    do {
        nextVideoIndex = Math.floor(Math.random() * videos.length);
    } while (nextVideoIndex === currentVideoIndex);

    // Update the current video index and set the new video source
    currentVideoIndex = nextVideoIndex;
    videoPlayer.src = videos[currentVideoIndex];

    // Load the new video and start playing from the saved time
    videoPlayer.addEventListener("loadedmetadata", function() {
        // Start the new video from where the previous one left off
        videoPlayer.currentTime = lastPlayedTime;
        videoPlayer.play();
    }, { once: true }); // Use once to ensure the event only fires once per video load
}

// Optional: Reset the lastPlayedTime when the video ends
videoPlayer.addEventListener("ended", () => {
    lastPlayedTime = 0; // Reset to 0 at the end of the video
});