let enemyHp = 100;
let userHp = 100;
let isUserTurn = true;
let isGameRunning = true;

export const attack = () => {
  if (isUserTurn && isGameRunning) {
    reduceEnemyHp();

  }
}

const reduceEnemyHp = () => {
  enemyHp -= 7;
  console.log(`Enemy HP: ${enemyHp}`);
  switchTurns();
}

const switchTurns = () => {
  isUserTurn = !isUserTurn;
} 