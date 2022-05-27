import { msg } from "./setup";

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const hide = () =>  {
  msg.setAttribute('style', 'display: none')
};

export const gameName = async (gameID) => {
  let response = await fetch(apiURL,{
    method: 'POST',
    body: JSON.stringify({ name: 'Ready player one' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  response = await response.json();
  gameID = await response.result.slice(14, 34);
  localStorage.setItem('scores', gameID);
  windows.location.reload();
};

export const populate = async (nameInput, scoreInput, gameID) => {
  if (nameInput.value !== '' && scoreInput.value !== '' && isNaN(scoreInput.value) === false) {
    await fetch(`${apiURL}/games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: `${nameInput.value}:`,
        score: `${scoreInput.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    msg.textContent = 'New score!';
    nameInput.value = '';
    scoreInput.value = '';
    setTimeout(hide, 3000);
  } else {
    msg.textContent = "Complete all";
    setTimeout(hide, 3000);
  }
}

export const listScores = async (gameID, container) => {
  msg.textContent = 'Loading...';
  container.innerHTML =  '';
  let response = await fetch(`${apiURL}/games/${gameID}/scores`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  response = await response.json();
  console.log(response.result)
  response = response.result.sort((a,b)=>{return b.score-a.score});
  console.log(response)
  response.forEach((element) => {
    container.innerHTML += `<li>${element.user} ${element.score}</li>`;
  });
};