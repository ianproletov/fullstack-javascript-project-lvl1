import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minLength = 5;
const maxLength = 10;
const maxEnlargement = 10;
const maxValue = 100;

const generateStep = () => {
  const length = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
  const hiddenIndex = Math.floor(Math.random() * length);
  const enlargement = Math.floor(Math.random() * maxEnlargement);
  const start = Math.floor(Math.random() * maxValue);
  const numbers = [];
  for (let i = 0; i < length; i += 1) {
    numbers[i] = start + i * enlargement;
  }
  const correctAnswer = String(numbers[hiddenIndex]);
  numbers[hiddenIndex] = '..';
  const question = numbers.join(' ');
  return { question, correctAnswer };
};

export default () => game(description, generateStep);
