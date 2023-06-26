let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let dice = document.getElementById("dice");
let btnRoll = document.getElementById("btn--roll");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let btnHold = document.getElementById("btnHold");
let restart = document.getElementById("restart");

let currentValu6e, activePlayer, score, playing;

function gameStarter() {
  currentValue = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  current0.textContent = 0;
  current1.textContent = 0;
}
gameStarter();

function switchPlayer() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentValue = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  if (playing) {
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      console.log(randomDice);
      currentValue += randomDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentValue;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  score[activePlayer] += currentValue;

  if (score[activePlayer] >= 50) {
    playing = false;
    dice.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`) .classList.remove("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById("winner").style.display = "block";
    document.getElementById(`win-msg--${activePlayer}`).textContent = "Congratulation You won 🎉";
  } else {
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    switchPlayer();
  }
});

restart.addEventListener("click", () => {
  gameStarter();

  document.getElementById("winner").style.display = "none";
  document.getElementById(`win-msg--${activePlayer}`).textContent = "";
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
  document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
});
