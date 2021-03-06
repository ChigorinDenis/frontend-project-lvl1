import { generateNum, makeData } from '../utils.js';
import playGame from '../index.js';

const getSign = () => {
  const operations = '+-*';
  return operations[generateNum(0, operations.length - 1)];
};

const calculate = (a, b, sign) => {
  const actions = {
    '+': () => (a + b),
    '-': () => (a - b),
    '*': () => (a * b),
  };
  return actions[sign]();
};

const generateGameData = () => {
  const sign = getSign();
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const result = calculate(a, b, sign);
  const question = `${a} ${sign} ${b}`;
  return makeData(question, result.toString());
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(generateGameData, gameDescription);
};
