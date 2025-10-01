const headerElement = document.querySelector('header')
const enemyHpElement = document.querySelector('#enemy-hp')
const userHpElement = document.querySelector('#user-hp')
const enemyHpBarElement = document.querySelector('#enemy-hp-bar')
const userHpBarElement = document.querySelector('#user-hp-bar')
const attackButtonElement = document.querySelector('button')


export const renderHpBars = (enemyHp, userHp, isUserTurn) => {
  enemyHpBarElement.style.width = enemyHp + '%';
  userHpBarElement.style.width = userHp + '%';
  enemyHpElement.textContent = `Life ${enemyHp}`;
  userHpElement.textContent = `Life ${userHp}`;
  attackButtonElement.textContent = isUserTurn ? 'Attack' : "Enemy's Turn";
  ד

}

export const renderWinnerText = (winnerName) => {
  headerElement.textContent = `${winnerName} is the Winner!`
}