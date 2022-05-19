import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const maxValue = 100;

const getBiggestDivider = (operator1, operator2) => {
  const maxDivisor = Math.min(operator1, operator2);
  for (let i = maxDivisor; i > 0; i -= 1) {
    if (operator1 % i === 0 && operator2 % i === 0) {
      return i;
    }
  }
  return null;
};

const generateStep = () => {
  const operator1 = Math.floor(Math.random() * maxValue);
  const operator2 = Math.floor(Math.random() * maxValue);
  const question = `${operator1} ${operator2}`;
  const result = getBiggestDivider(operator1, operator2);
  const correctAnswer = String(result);
  return { question, correctAnswer };
};

export default () => game(description, generateStep);
