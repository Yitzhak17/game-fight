let enemyHp = 100;
let userHp = 100;
let isUserTurn = true;
let isGameRunning = true;
const MAX_DMG = 20;

const generateRandomDmg = () => {
  return Math.floor(Math.random() * MAX_DMG);
}


export const attack = () => {
  if (isUserTurn && isGameRunning) {
    reduceEnemyHp();

  }
}

const reduceEnemyHp = () => {
  enemyHp -= generateRandomDmg();
  console.log(`Enemy HP: ${enemyHp}`);
  switchTurns();
  setEnenmyTimeAttack();
}

const setEnenmyTimeAttack = () => {
  setTimeout(() => {
    if (!isUserTurn && isGameRunning) {
      userHp -= generateRandomDmg();
      console.log(`User HP: ${userHp}`);
      switchTurns();
    }
  }, 2000);
}
const switchTurns = () => {
  isUserTurn = !isUserTurn;
} 