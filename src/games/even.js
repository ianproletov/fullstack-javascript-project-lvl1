import game from '../index.js';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const maxValue = 100;
const generateStep = () => {
  const question = Math.floor(Math.random() * maxValue);
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => game(description, generateStep);
