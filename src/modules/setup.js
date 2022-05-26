export const nameInput = document.getElementById('name');
export const scoreInput = document.getElementById('score');
export const container = document.getElementById('scores');
export const scoresList = JSON.parse(localStorage.getItem('score')) || [];
export class Score {
  constructor(name, score) {
    this.list = [name, score];
    this.name = name;
    this.score = score;
  }

  addNew = (dato) => {
    scoresList.push(dato);
    localStorage.setItem('score', JSON.stringify(scoresList));
  }
}