const questionElement = document.getElementById('question');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');
const formElement = document.getElementById('form');

const number1 = Math.round(Math.random() * 100);
const number2 = Math.round(Math.random() * 20);

if (performance.getEntriesByType('navigation')[0].type === 'reload') {
  localStorage.removeItem('score');
}
let score = JSON.parse(localStorage.getItem('score'));

if (number1 >= number2) {
  questionElement.innerText = `What is ${number1} divided by ${number2}?`;
} else {
  questionElement.innerText = `What is ${number2} divided by ${number1}?`;
}
if (!score) {
  score = 0;
}
scoreElement.innerText = `score: ${score}`;

function division(num1, num2) {
  score = JSON.parse(localStorage.getItem('score'));
  let result = 0;
  const userAnswer = +inputElement.value;
  if (num1 >= num2) {
    result = +(num1 / num2).toFixed(2);
  } else {
    result = +(num2 / num1).toFixed(2);
  }
  userAnswer === result ? score++ : score--;
  localStorage.setItem('score', JSON.stringify(score));
}

formElement.addEventListener('submit', () => {
  division(number1, number2);
});
