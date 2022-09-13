const handleHamburgerMenu = () => {
  const hamburger = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    })
  }
}

const updateLandingNavbar = () => {
  const logo = document.querySelector('.home-btn h1');
  const landingNav = document.querySelector('#landing .landing-nav');

  if (landingNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 150) {
        landingNav.classList.add('bg-white');
        logo.classList.add('smaller-logo');
      } else {
        landingNav.classList.remove('bg-white');
        logo.classList.remove('smaller-logo');
      }
    })
  }
}

export { handleHamburgerMenu, updateLandingNavbar }
