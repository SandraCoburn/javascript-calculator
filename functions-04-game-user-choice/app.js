const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cCoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);

  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  }
  let message;
  if (winner === RESULT_DRAW) {
    message = `You picked ${playerSelection}, computer picked ${computerChoice}`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game
const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

// when you use the function that it's not arrow function you get an argument that acts like an array
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    //it will have all arguments passed turned into an array like
    sum -= num;
  }
  return sum;
};
console.log(sumUp(1, 2, 10, -3, 10));
console.log(subtractUp(2, 3, -6, 49));
