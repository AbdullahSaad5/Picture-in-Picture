const video = document.getElementById("video");
const stream = document.getElementById("button");
const select = document.getElementById("select");

async function selectMediaStream() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = media;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (e) {
    console.log(e);
  }
}

stream.addEventListener("click", async () => {
  stream.disabled = true;

  await video.requestPictureInPicture();

  stream.disabled = false;
});

select.addEventListener("click", selectMediaStream);
