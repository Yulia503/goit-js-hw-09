import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const selectors = {
  inputDateChoose: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('button[data-start]'),
  dayEl: document.querySelector('.value[data-days]'),
  hourEl: document.querySelector('.value[data-hours]'),
  minEl: document.querySelector('.value[data-minutes]'),
  secEl: document.querySelector('.value[data-seconds]'),
};

let selectedDate;
let incorrectDay; 

selectors.startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    incorrectDay = selectedDate - options.defaultDate.getTime();
    wrongDate();
    selectors.startBtnEl.addEventListener('click', countDownTimer);
  },
};

flatpickr(selectors.inputDateChoose, options);

function wrongDate() {
  if (selectedDate >= options.defaultDate.getTime()) {
    selectors.startBtnEl.disabled = false;
  } else {
    return window.alert('Please choose a date in uthe futre')
  }
}

function countDownTimer() {
  selectors.startBtnEl.disabled = true;
  const intervalId = setInterval(() => {
    incorrectDay -= 1000;
    const { days, hours, minutes, seconds } = convertMs(incorrectDay);
    selectors.dayEl.textContent = addLeadingZero(days);
    selectors.hourEl.textContent = addLeadingZero(hours);
    selectors.minEl.textContent = addLeadingZero(minutes);
    selectors.secEl.textContent = addLeadingZero(seconds);
    if (incorrectDay < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value.toString().length >= 2) {
    return value;
  }
  return value.toString().padStart(2, '0');
}