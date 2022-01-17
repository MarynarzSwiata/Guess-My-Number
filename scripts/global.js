const displayMessage = function (typeFunction, message) {
  document.querySelector(typeFunction).textContent = message;
};

const randomNumber = function () {
  return (secretNumber = Math.trunc(Math.random() * 20) + 1);
};

const reset = function () {
  secretNumber = randomNumber();
  score = 20;
  displayMessage('.score', score);
  displayMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('.message', 'Start guessing...');
};

const gameOver = function () {
  displayMessage('.message', '🛑 The game is over!');
  document.querySelector('.score').textContent = 0;
};

const removeScore = function () {
  score--;
  displayMessage('.score', score);
};

secretNumber = randomNumber();

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('.message', '🛑 No number!');
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? '⏫ Too high!' : '⏬ Too low!'
      );
      removeScore();
    } else {
      gameOver();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});
