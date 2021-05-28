const handleEntryVideos = () => {
  const entryVideo = document.querySelector('#entry-video');
  const loopVideo = document.querySelector('#loop-video');

  if (entryVideo) {
    const video = entryVideo.firstElementChild;
    video.addEventListener("ended", () => {
      loopVideo.classList.remove('hidden');
      loopVideo.firstElementChild.play();
      video.parentElement.remove();
    })
  } else {
    if (loopVideo) {
      loopVideo.classList.remove('hidden');
      loopVideo.firstElementChild.play();
    }
  }
}

export { handleEntryVideos }
