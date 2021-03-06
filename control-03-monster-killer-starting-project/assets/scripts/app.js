const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const enteredValue = prompt("Maximun life for you and the monster", "100");
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

function attackHandler() {
  attackMonster("ATTACK");
  //   const damage = dealMonsterDamage(ATTACK_VALUE);
  //   currentMonsterHealth -= damage;
  //   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  //   currentPlayerHealth -= playerDamage;
  //   if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
  //     alert("You won!");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
  //     alert("you lost!");
  //   }
}
const userName = isLogin ? "mas" : null;

function attackMonster(mode) {
  let maxDamage = mode === "ATTACK" ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === "ATTACK"
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  //   if (mode === "ATTACK") {
  //     maxDamage = ATTACK_VALUE;
  //      logEvent = LOG_EVENT_PLAYER_ATTACK
  //   } else {
  //     maxDamage = STRONG_ATTACK_VALUE;
  //      logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  //   }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
  //   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  //   currentPlayerHealth -= playerDamage;
  //   if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
  //     alert("You won!");
  //   } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
  //     alert("you lost!");
  //   } else {
  //       alert("you have a draw")
  //   }
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    alert("You won!");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    alert("you lost!");
    reset();
  } else {
    alert("you have a draw");
    reset();
  }
}

function strongAttackHandler() {
  attackMonster("STRONG ATTACK");
  //  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  //  currentMonsterHealth -= damage;
  //  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  //  currentPlayerHealth -= playerDamage;
  //  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
  //    alert("You won!");
  //  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
  //    alert("you lost!");
  //  }
}
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}
function healPlayerHandler() {
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}
function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "MONSTER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    battleLog.push(logEntry);
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "MONSTER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    battleLog.push(logEntry);
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: event,
      value: value,
      target: "PLAYER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    battleLog.push(logEntry);
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
