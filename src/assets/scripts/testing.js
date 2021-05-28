
const initVideoEvents = () => {
  const videoWrap = document.querySelector('.video-wrap');
  if (videoWrap) {
    const videoEl = videoWrap.querySelector('video');
  }
  const playCtrl = document.querySelector('.action--play');
  const closeCtrl = document.querySelector('.action--close');

  const play = () => {
    videoEl.currentTime = 0;
    videoWrap.classList.remove('video-wrap--hide')
    videoWrap.classList.add('video-wrap--show')
    setTimeout(function() {videoEl.play();}, 600);
  }

  const hide = () => {
    videoWrap.classList.remove('video-wrap--show');
    videoWrap.classList.add('video-wrap--hide');
    videoEl.pause();
  }

  if (videoWrap) {
    playCtrl.addEventListener('click', play);
    closeCtrl.addEventListener('click', hide);
    videoEl.addEventListener('ended', hide);
  }
}

export { initVideoEvents }
