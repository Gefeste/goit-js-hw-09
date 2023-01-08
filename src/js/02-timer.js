import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker')
const btnElStart = document.querySelector('button[data-start]');
let timerId = null;
btnElStart.setAttribute('disabled', true)

btnElStart.addEventListener('click', onTimerStart);
const startTime = Date.now();

function onTimerStart() {

  timerId = setInterval(() => {
    console.log('date', startTime)
    convertMs()
  }, 1000);

}


const options = {
  
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDay = selectedDates[0]
    console.log("const", selectDay)
    if (selectDay < startTime) {
      alert("Please choose a date in the future")
    }
    if (selectDay > startTime) {
      btnElStart.removeAttribute('disabled', true)
    }
    new Date(selectDay, startTime);
    const outOfTime = selectDay - startTime;
    console.log("outOfTime", outOfTime)
    console.log("convert", convertMs(outOfTime))
  },
};



flatpickr(inputEl, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}