import { handleHamburgerMenu, updateLandingNavbar } from './nav-menu.js';
import { handleBoxHovers } from './box-hovers.js';
import { handleEntryVideos } from './videos.js';
import { handleDirectory } from './directory.js';
import { initVideoEvents } from './testing.js';

handleHamburgerMenu();
updateLandingNavbar();
handleBoxHovers();
handleEntryVideos();
initVideoEvents();
handleDirectory();
