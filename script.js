const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select media stream, pass to video element
// , then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //  capture live stream contains
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    // Catch error here
    console.log('whooops, error here: ', err);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  
  // Reset Button
  button.disabled = false;
  
});

// Function Call
selectMediaStream();