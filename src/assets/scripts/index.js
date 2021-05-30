import { handleNavMenu } from './nav-menu.js';
import { handleBoxHovers } from './box-hovers.js';
import { handleEntryVideos } from './videos.js';
import { handleDirectory } from './directory.js';
import { initVideoEvents } from './testing.js';

handleNavMenu();
handleBoxHovers();
handleEntryVideos();
initVideoEvents();
handleDirectory();
