import {
  gameName, gameID, populate, listScores,
} from './modules/API.js';

import {
  nameInput, scoreInput, container,
} from './modules/setup.js';

import backgroundIMG from './ventas.jpg'

const addBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const wallpaper = document.querySelector('html');

wallpaper.style.backgroundImage = `url('${backgroundIMG}')`;

if (gameID === null) { gameName(); }

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  populate(nameInput, scoreInput, gameID);
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  listScores(gameID, container);
});