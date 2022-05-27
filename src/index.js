import {
  gameName, gameID, populate, listScores,
} from './modules/API.js';
import {
  nameInput, scoreInput, container, 
} from './modules/setup.js';

const addBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

if (gameID === null) { gameName(); }

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  populate(nameInput, scoreInput, gameID);
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  listScores(gameID, container)
});