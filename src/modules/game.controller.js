import { attack } from './game.model.js';

export const addButtonEvent = () => {
  document.querySelector('button').addEventListener('click', () => {
    console.log('Attack!');
    attack();
  });
}
