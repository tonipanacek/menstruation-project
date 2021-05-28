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

const initVimeo = (vimeoID, divID, content) => {
  const videoName = divID;
  const player = new Player(content, {
    id: vimeoID,
    autoplay: true,
    controls: false
  });
  audio.pause();

  player.on('ended', () => {
    console.log('video ended')
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
  if (button) {
    button.classList.add('hidden');
    button.classList.remove('clicked');
  };
}

const onCardClick = (e) => {
  const parentRoomBox = e.currentTarget;
  const hoverBtnDiv = parentRoomBox.firstElementChild;
  const divID = parentRoomBox.classList[1];
  const content = document.querySelector(`.${divID}-art-piece`);
  const vimeoID = hoverBtnDiv.dataset.vimeo;
  const imagePath = hoverBtnDiv.dataset.imagePath;
  let closeBtn;
  let player;
  if (content) {
    if (vimeoID) {
      player = initVimeo(vimeoID, divID, content);
    } else if (imagePath) {
      const baseClUrl = "https://res.cloudinary.com/tonipanoche/image/upload/q_auto,f_auto,dpr_auto/menstruation-project/"
      const imageHTML = `<img class="one-image" src="${baseClUrl + imagePath}" alt="">`;
      const existingImage = content.querySelector('.one-image');
      if (!existingImage) {
        content.insertAdjacentHTML('beforeend', imageHTML);
      }
    }
    content.classList.remove('hidden');
    if (player) {
      player.getPaused().then((paused) => {
        if (paused) {
          audio.pause();
          player.play();
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
