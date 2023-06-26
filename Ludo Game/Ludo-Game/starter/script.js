let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let dice = document.getElementById("dice");
let btnRoll = document.getElementById("btn--roll");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let btnHold = document.getElementById("btnHold");
let restart = document.getElementById("restart");

let currentValue = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  if (playing) {
    // pehle apko random dice ki value generate krni hai
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    // dice ki image ko unhide krne k liye use kr rahe hain neeche wala code.
    dice.classList.remove("hidden");
    // uske baad image k andar us variable ki value ko put krien
    dice.src = `dice-${randomDice}.png`;

    // ab yahan pr condition check krni hai k dice ki value 1 to nahi hai agar nahi hai to if ki condition chal jayegi wrna else ki condition chale gi.
    if (randomDice !== 1) {
      console.log(randomDice);
      currentValue += randomDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentValue;
    } else {
      // yahan hum switch kreinge player ko
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      // for switching active player we need to switch active values

      // if(activePlayer === 0){
      //     activePlayer = 1;
      // }else{
      //     activePlayer = 0;
      // }

      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentValue = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle("player--active");

      // document.getElementById(``);
    }
  }
});

btnHold.addEventListener("click", () => {
  score[activePlayer] += currentValue;

  if (score[activePlayer] >= 50) {
    playing = false;
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById("winner").style.display = "block";
    document.getElementById(`win-msg--${activePlayer}`).textContent =
      "Congratulation You won 🎉";
  } else {
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentValue = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle("player--active");
  }
});

restart.addEventListener("click", () => {
   currentValue = 0;
   score = [0, 0];
   playing = true;
   
   current0.textContent = 0;
   current1.textContent = 0;
   score0.textContent = 0;
   score1.textContent = 0;
   dice.classList.add("hidden");
   document.getElementById("winner").style.display = "none";
   document.getElementById(`win-msg--${activePlayer}`).textContent = "";
   
   document.querySelector(`.player--${activePlayer}`)
      .classList.remove("player--winner");
   activePlayer = 0;


   document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    
});
