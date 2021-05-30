const handleDirectory = () => {
  const dirRoom = document.querySelector(".directory-room");

  if (dirRoom) {
    const buttons = document.querySelectorAll('.btn-dir');
    const contentDivs = document.querySelectorAll('.dir-content');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const btnID = button.classList[1];
        buttons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
        contentDivs.forEach(contentDiv => contentDiv.classList.add('hidden'));
        const activeDiv = document.querySelector(`.${btnID}-content`);
        activeDiv.classList.remove('hidden');
      })
    })
  }
}

export { handleDirectory }
