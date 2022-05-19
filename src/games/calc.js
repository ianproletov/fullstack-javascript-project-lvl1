import game from '../index.js';

const description = 'What is the result of the expression?';

const operationMap = {
  0: ['+', (a, b) => a + b],
  1: ['-', (a, b) => a - b],
  2: ['*', (a, b) => a * b],
};
const operationsNumber = 3;
const maxValue = 100;

const generateStep = () => {
  const operationNumber = Math.floor(Math.random() * operationsNumber);
  const [operationSymbol, operation] = operationMap[operationNumber];
  const operator1 = Math.floor(Math.random() * maxValue);
  const operator2 = Math.floor(Math.random() * maxValue);
  const operationResult = operation(operator1, operator2);
  const question = `${operator1} ${operationSymbol} ${operator2}`;
  const correctAnswer = String(operationResult);
  return { question, correctAnswer };
};

export default () => game(description, generateStep);
