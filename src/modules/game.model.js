import * as view from './game.view.js';

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
  enemyHp = Math.max(0, enemyHp); // לא לרדת מתחת ל-0
  console.log(`Enemy HP: ${enemyHp}`);
  view.renderHpBars(enemyHp, userHp, isUserTurn);

  checkWinnerState();
  if (!isGameRunning) return;

  switchTurns();
  view.renderHpBars(enemyHp, userHp, isUserTurn); // ← מציג "Enemy's Turn"
  setEnenmyTimeAttack();
};


const checkWinnerState = () => {
  const winner = userHp <= 0 ? 'Enemy' : enemyHp <= 0 ? 'User' : null;
  if (winner) {
    isGameRunning = false;
  }
  view.renderWinnerText(winner);
}
const setEnenmyTimeAttack = () => {
  setTimeout(() => {
    if (!isUserTurn && isGameRunning) {
      userHp -= generateRandomDmg();
      userHp = Math.max(0, userHp);
      console.log(`User HP: ${userHp}`);
      view.renderHpBars(enemyHp, userHp, isUserTurn);

      checkWinnerState();
      if (!isGameRunning) return;

      switchTurns();
      view.renderHpBars(enemyHp, userHp, isUserTurn); // ← חוזר ל-"Attack"
    }
  }, 1200); // היה 0, עכשיו 1.2s כדי שיתעדכן הטקסט לעין
};

const switchTurns = () => {
  isUserTurn = !isUserTurn;
} 