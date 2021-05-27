import Player from '@vimeo/player';

const room = document.querySelector('.room');
const boxes = document.querySelectorAll('.room-box');

const initVimeo = (vimeoID, divID, content) => {
  const videoName = divID;
  const player = new Player(content, {
    id: vimeoID,
    autoplay: true,
    controls: false
  });

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
      const baseClUrl = "https://res.cloudinary.com/tonipanoche/image/upload/v1622148106/menstruation-project/"
      const imageHTML = `<img class="one-image" src="${baseClUrl + imagePath}" alt="">`;
      const existingImage = content.querySelector('.one-image');
      if (!existingImage) {
        content.insertAdjacentHTML('beforeend', imageHTML);
      }
    }
    content.classList.remove('hidden');
    if (player) {
      player.getPaused().then((paused) => {
        if (paused) { player.play()}
      })
    }
    closeBtn = content.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      content.classList.add('hidden');
      if (player) {
        player.pause();
      }
    })
  }
}

const handleBoxHovers = () => {
  if (room) {
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
