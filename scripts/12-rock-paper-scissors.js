const storedScore = localStorage.getItem('score');
let score = JSON.parse(storedScore) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
    } , 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

const rockBtnElement = document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    playGame('rock');
  })

const paperBtnElement = document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    playGame('paper');
  })

const scissorsBtnElement = document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
  })

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else {
    alert('wrong key');
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultElement = document.querySelector('.js-result');
  
  
  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      resultElement.innerHTML = 'You lose.';
    } else if (computerMove === 'paper') {
      resultElement.innerHTML = 'You win!';
    } else {
      resultElement.innerHTML = 'It\'s a tie.';
    }
    
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      resultElement.innerHTML = 'You win!';
    } else if (computerMove === 'paper') {
      resultElement.innerHTML = 'It\'s a tie.';
    } else {
      resultElement.innerHTML = 'You lose.';
    }

  } else {
    if (computerMove === 'rock') {
      resultElement.innerHTML = 'It\'s a tie.';
    } else if (computerMove === 'paper') {
      resultElement.innerHTML = 'You lose.';
    } else {
      resultElement.innerHTML = 'You win!';
    }
  }

  if (resultElement.innerHTML === 'You win!') {
    score.wins++;
  } else if (resultElement.innerHTML === 'It\'s a tie.') {
    score.ties++;
  } else {
    score.losses++;
  }

  const scoreString = JSON.stringify(score);
  localStorage.setItem('score', scoreString);

  displayScore();

  const choiceDisplay = document.querySelector('.js-choice-display');
  choiceDisplay.innerHTML = `You <img class="move-icon" src="./images/${playerMove}-emoji.png">
  <img class="move-icon" src="./images/${computerMove}-emoji.png">  Computer`
}

function displayScore() {
  let scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore(){
  score.losses=0;
  score.wins=0;
  score.ties=0;
  localStorage.removeItem('score');

  displayScore();
}