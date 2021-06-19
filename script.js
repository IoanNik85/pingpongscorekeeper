const option = document.querySelector(".option");
const player1Button = document.querySelector(".player1-btn");
const player2Button = document.querySelector(".player2-btn");
const resetBtn = document.querySelector(".reset");

const player1score = document.querySelector(".container__player1");
const player2score = document.querySelector(".container__player2");
const playersScore = document.querySelector(".game_buttons");
const announce = document.querySelector(".announce");

// console.log(option.value);
let finalScore;
let player1scoreValue;
let player2scoreValue;

let stopChange = false;

const initialState = () => {
  option.value = "";
  finalScore = "";
  player1scoreValue = 0;
  player2scoreValue = 0;
  player1score.innerText = 0;
  player2score.innerText = 0;
  resetBtn.innerText = "RESET";
  announce.innerText = "";
  player1score.style.color = "black";
  player2score.style.color = "black";
  player1Button.style.display = "inline-block";
  player2Button.style.display = "inline-block";
};

const winGame = function (finalScore, player1scoreValue, player2scoreValue) {
  if (finalScore && finalScore === player1scoreValue) {
    console.log("success");
    player1Button.style.display = "none";

    player2Button.style.display = "none";
    player1scoreValue.innerText = player1scoreValue + 1;
    player1score.style.color = "red";
    announce.innerText = "Player 1 Wins!";
  }
  if (finalScore && finalScore === player2scoreValue) {
    console.log("success");
    player1Button.style.display = "none";
    player2Button.style.display = "none";
    player2scoreValue.innerText = player2scoreValue + 1;
    player2score.style.color = "red";
    announce.innerText = "Player 2 Wins!";
  }
};

initialState();

option.addEventListener("click", function (e) {
  if (option.value) {
    finalScore = Number(option.value);
    player1score.innerText = 0;
    player2score.innerText = 0;
  }
});

player1Button.addEventListener("click", function () {
  if (player1scoreValue < finalScore) {
    player1scoreValue = Number(player1score.innerText) + 1;
    player1score.innerText = player1scoreValue;
  }
});

player2Button.addEventListener("click", function () {
  if (player2scoreValue < finalScore) {
    player2score.innerText = Number(player2score.innerText) + 1;
    player2scoreValue = Number(player2score.innerText);
  }
});

resetBtn.addEventListener("click", function () {
  initialState();
});

playersScore.addEventListener("click", function (e) {
  winGame(finalScore, player1scoreValue, player2scoreValue);
});
