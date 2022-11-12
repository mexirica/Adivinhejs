'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Sem input
  if (!guess) {
    displayMessage('⛔️ Sem número!');

    // Quando ganhar
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número certo!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Quando erra
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Você perdeu o jogo!');
      document.querySelector('.score').textContent = 0;
    }
  }
    if (highscore<score) {
      document.querySelector('.highscore').value=document.querySelector(".score").value
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Começar o jogo
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Resetar o jogo
document.querySelector(".again").addEventListener("click", function(){
document.querySelector(".score").textContent="20";
document.querySelector(".guess").value='';
document.querySelector('secretNumber').value =
  Math.trunc(Math.random() * 20) + 1;

})