// VARIABLES
const manual = document.querySelector('.manual');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const btnCloseModal = document.querySelector('.close-modal');

// GLOBAL LISTENERS
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  // Returning exactly value of object 'e' on position 'key'
});

//FUNCTIONS
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

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

//MAIN
secretNumber = randomNumber();

let score = 20;
let highscore = 0;

// GUESSING FUNCTIONALITY
check.addEventListener('click', function () {
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

// RESET FUNCTIONALITY
again.addEventListener('click', function () {
  reset();
});

// Manual button function
manual.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
