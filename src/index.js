import { 
  nameInput, scoreInput, container, scoresList, Score 
} from './modules/setup.js';

const addBtn = document.getElementById('submit');
const data = document.getElementById('data');

const printList = () => {
  for (let i = 0; i < scoresList.length; i += 1) {
    const scoreStorage = document.createElement('li');
    scoreStorage.textContent = `${scoresList[i].name}: ${scoresList[i].score}`;
    scoreStorage.className = 'scoreStorage';
    container.append(scoreStorage);
  }
};

printList();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const score = new Score(nameInput.value, scoreInput.value);
  score.addNew(score);
  data.reset();
  window.location.reload();
});