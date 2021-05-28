import Player from '@vimeo/player';

const room = document.querySelector('.room');
const boxes = document.querySelectorAll('.room-box');
const audio = document.querySelector('audio');

const initAudio = () => {
  const pageName = document.body.id;
  const baseSrc = 'https://res.cloudinary.com/tonipanoche/video/upload/menstruation-project';
  if (audio) {
    audio.src = `${baseSrc}/sound-${pageName}.mp3`;
    audio.play();
  }
}

const initVimeo = (hoverBtn, divID, content) => {
  const vimeoID = hoverBtn.dataset.vimeo;
  const music = hoverBtn.dataset.music;
  if (music !== 'true') {
    audio.pause();
  }
  const mediaDiv = content.querySelector('.media-content');
  const videoName = divID;
  const player = new Player(mediaDiv, {
    id: vimeoID,
    autoplay: true,
    controls: false
  });
  const afterContent = content.querySelector('.after-content');

  player.on('play', () => {
    content.querySelector('.loading').style.zIndex = -1;
  })

  player.on('ended', () => {
    if (afterContent) {
      mediaDiv.classList.add('fade-out');
      setTimeout(() => {
        mediaDiv.classList.add('hidden'), 2000;
        afterContent.classList.remove('hidden');
      });
    }
  })
  return player;
}

const showInfoBoxes = (box) => {
  const button = box.querySelector('.btn-watch');
  const area = box.classList[1];
  const content = document.querySelector(`.${area}-content`);
  content.classList.remove('hidden');
  if (button) button.classList.remove('hidden');
}

const hideInfoBoxes = (box) => {
  const button = box.querySelector('.btn-watch');
  const area = box.classList[1];
  const content = document.querySelector(`.${area}-content`);
  content.classList.add('hidden');
  if (button && !box.classList.contains('info-box')) {
    button.classList.add('hidden');
  }
}

const onCardClick = (e) => {
  const parentRoomBox = e.currentTarget;
  const hoverBtnDiv = parentRoomBox.firstElementChild;
  const divID = parentRoomBox.classList[1];
  const content = document.querySelector(`.${divID}-art-piece`);
  const vimeoID = hoverBtnDiv.dataset.vimeo;
  const music = hoverBtnDiv.dataset.music;
  const imagePath = hoverBtnDiv.dataset.imagePath;
  let closeBtn;
  let player;
  if (content) {
    if (vimeoID) {
      player = initVimeo(hoverBtnDiv, divID, content);
    } else if (imagePath) {
      const baseClUrl = "https://res.cloudinary.com/tonipanoche/image/upload/q_auto,f_auto,dpr_auto/menstruation-project/"
      const imageHTML = `<img class="one-image" src="${baseClUrl + imagePath}" alt="">`;
      const existingImage = content.querySelector('.one-image');
      if (!existingImage) {
        content.lastElementChild.insertAdjacentHTML('beforeend', imageHTML);
      }
    }
    content.classList.remove('hidden');
    if (player) {
      player.getPaused().then((paused) => {
        if (paused) {
          if (music) {
            player.play();
          } else {
            audio.pause();
            player.play();
          }
        }
      })
    }
    closeBtn = content.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      content.classList.add('hidden');
      if (player) {
        player.pause();
        audio.play();
      }
    })
  }
}

const handleBoxHovers = () => {
  if (room) {
    initAudio();
    boxes.forEach(box => {
      box.addEventListener('mouseover', (e) => {
        showInfoBoxes(box);
      });
      box.addEventListener('mouseleave', (e) => {
        hideInfoBoxes(box);
      });
      box.addEventListener('click', onCardClick);
    })
  }
}

export { handleBoxHovers }
