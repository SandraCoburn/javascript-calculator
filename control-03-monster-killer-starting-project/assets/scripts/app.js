const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

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
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    alert("you lost!");
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

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
