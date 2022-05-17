#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game from '../src/index.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
game(playerName);
