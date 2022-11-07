const videoElement: HTMLVideoElement = document.querySelector(".video");
const button = document.querySelector(".btn");
let hidePlayer = false;

const selectStream = async () => {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert("Something went wrong, will fix soon!!!");
  }
};

button?.addEventListener("click", async () => {
  if (!hidePlayer) hidePlayer = true;
  else hidePlayer = false;
  videoElement.hidden = hidePlayer;
  await videoElement.requestPictureInPicture();
});

selectStream();
