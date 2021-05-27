import Player from '@vimeo/player';

const room = document.querySelector('.room');
const boxes = document.querySelectorAll('.room-box');

const initVimeo = (vimeoID, divID, content) => {
  const videoName = divID;
  const player = new Player(content, {
    id: vimeoID,
    autoplay: true
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
  console.log(content)
  const vimeoID = hoverBtnDiv.dataset.vimeo;
  let closeBtn;
  let player;
  if (content) {
    content.classList.remove('hidden');
    closeBtn = content.querySelector('.close');
  }
  if (vimeoID) {
    player = initVimeo(vimeoID, divID, content);
  }
  if (closeBtn) {
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
