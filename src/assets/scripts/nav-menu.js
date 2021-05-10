const handleNavMenu = () => {
  const hamburger = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    })
  }
}

export { handleNavMenu }
