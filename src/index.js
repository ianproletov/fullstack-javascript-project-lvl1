import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const maxValue = 100;
const gameCounter = 3;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateQuestion = () => Math.floor(Math.random() * maxValue);

export default (playerName) => {
  console.log(description);
  let counter = gameCounter;
  while (counter > 0) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (correctAnswer !== answer) {
      console.log(`Answer "${answer}" is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
    console.log('Correct!');
    counter -= 1;
  }
  console.log(`Congratulations, ${playerName}!`);
};
