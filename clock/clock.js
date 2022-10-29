const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
const hoursElement12 = document.getElementById('hours_12');
const hoursElement24 = document.getElementById('hours_24');

const clock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = '';

  hours >= 12 ? (ampm = 'PM') : (ampm = 'AM');

  if (hoursElement24.checked === true) {
    hoursElement12.checked = false;
    hours = hours;
  } else if (hoursElement12.checked === true) {
    hoursElement24.checked = false;
    hours = hours - 12;
  } else {
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
  ampmElement.innerText = ampm;

  setInterval(() => {
    clock();
  }, 1000);
};

clock();
