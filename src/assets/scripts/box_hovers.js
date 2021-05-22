const handleBoxHovers = () => {
  const room = document.querySelector('.room');
  if (room) {
    const boxes = document.querySelectorAll('.room-box');
    boxes.forEach(box => {
      box.addEventListener('mouseover', (e) => {
        const button = box.querySelector('button');
        const area = e.currentTarget.classList[1];
        const content = document.querySelector(`.${area}-content`);
        content.classList.remove('hidden');
        if (button) button.classList.remove('hidden');
      })
      box.addEventListener('mouseleave', (e) => {
        const button = box.querySelector('button');
        const area = e.currentTarget.classList[1];
        const content = document.querySelector(`.${area}-content`);
        content.classList.add('hidden');
        if (button) button.classList.add('hidden');
      })
    })
  }
}

export { handleBoxHovers }
