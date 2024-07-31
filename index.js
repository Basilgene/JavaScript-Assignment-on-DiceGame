const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const dice5 = document.querySelector(".dice");

const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const btnnew = document.querySelector('.btn--new');

const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");


let currentPlayer = 0;
let currentScore = 0;
let scores = [0,0];

score0.textContent = 0;
score1.textContent = 0;
dice5.classList.add('hidden');

let playingGame = true;

const switchPlayer = function () {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  };

btnroll.addEventListener("click", function () {
    if (playingGame) {
        dice5.classList.remove('hidden');
        const dice = Math.trunc(Math.random() * 6) + 1;
        dice5.src = `./images/dice-${dice}.png`;

    

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${currentPlayer}`
      ).textContent = currentScore;
    } else {
        switchPlayer();
    }
    }
});

btnhold.addEventListener("click", function () {
    if (playingGame) {
        scores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];


    if (scores[currentPlayer] >= 50) {
        playingGame = false;
    
        document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
        dice5.classList.remove('hidden');
    } else {
        switchPlayer();
    }
    }
});


const resetButton = () => {
    //currentPlayer = 0;
    //currentScore = 0;
    //scores = [0,0];

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    let playingGame = true;

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    dice5.classList.add('hidden');


};
btnnew.addEventListener("click", resetButton);