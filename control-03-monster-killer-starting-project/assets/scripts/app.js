const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const enteredValue = prompt("Maximun life for you and the monster", "100");
let chosenMaxLife = parseInt(enteredValue);
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

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
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

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
