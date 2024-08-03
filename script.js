    //Elements
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

      //conditions
let currentPlayer = 0;
let currentScore = 0;
let scores = [0,0];

score0.textContent = 0;
score1.textContent = 0;
dice5.classList.add('hidden');

let playingGame = true;

          ///switch to next player function
const switchPlayer = function () {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');  //toggle function adds a class if its not present and removes it, if its present.
    player1.classList.toggle('player--active');
  };
      
         ///roll dice function
btnroll.addEventListener("click", function () {
    if (playingGame) {
        dice5.classList.remove('hidden');
        const dice = Math.trunc(Math.random() * 6) + 1;     //random dice rolling fnx
        dice5.src = `./images/dice-${dice}.png`;            //adding random dice image

    

    if (dice !== 1) {
        currentScore += dice;    //condition to add dice to currentscore
        document.getElementById(`current--${currentPlayer}`
      ).textContent = currentScore;
    } else {
        switchPlayer();
    }
    }
});

         // hold function
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

        ///new game reset
const resetButton = () => {
    currentPlayer = 0;
    currentScore = 0;
    scores = [0,0];

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    playingGame = true;

    player0.classList.add('player--active');
    player1.classList.remove('player--winner');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--active');

    dice5.classList.add('hidden');


};
btnnew.addEventListener("click", resetButton);