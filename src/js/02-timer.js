import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

// let targetDate = null;
let timerId = null;
let timerMS = null;
const currentDate = new Date();
//  console.log(currentDate);

btnStart.setAttribute('disabled', true);

btnStart.addEventListener('click', onTimeCounter);

function onTimeCounter() { 
    timerId = setInterval(timeCounter, 1000);
};


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    // minDate: Date.now(),  //мінімальна дата сьогодні
    onClose(selectedDates) {
        const targetDate = selectedDates[0];
        if (targetDate < currentDate) {
            return (Notify.failure('Please choose a date in the future'));
          }
        btnStart.disabled = false;
        timerMS = (targetDate - currentDate);
         }
};

flatpickr(inputData, options);

function timeCounter() { 
    timerMS -= 1000;
    const timerTime = convertMs(timerMS);
    const timer = addLeadingZero(timerTime);
    // console.log(timer);
    daysTimer.textContent = timer.daysPad;
    hoursTimer.textContent = timer.hoursPad;
    minutesTimer.textContent = timer.minutesPad;
    secondsTimer.textContent = timer.secondsPad;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
    // const day = days.toString.
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    const daysPad = value.days.toString().padStart(2, '0');
    const hoursPad = value.hours.toString().padStart(2, '0');
    const minutesPad = value.minutes.toString().padStart(2, '0');
    const secondsPad = value.seconds.toString().padStart(2, '0');
return { daysPad, hoursPad, minutesPad, secondsPad };
};

