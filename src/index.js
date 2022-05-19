import readlineSync from 'readline-sync';

const gameCounter = 3;

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  let counter = gameCounter;
  while (counter > 0) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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
