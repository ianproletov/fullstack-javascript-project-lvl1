import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValue = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const generateStep = () => {
  const result = Math.floor(Math.random() * maxValue);
  const correctAnswer = getAnswer(result);
  const question = String(result);
  return { question, correctAnswer };
};

export default () => game(description, generateStep);
