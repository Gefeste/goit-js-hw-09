// import Notiflix from 'notiflix';
// Notiflix.Notify.failure('Please choose a date in the future');
// Notiflix.Notify.success('Great, you choose a date in the future!');
const dela = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const counter = document.querySelector('input[name="amount"]')
console.log(dela)
console.log(delayStep)
console.log(counter)
const form = document.querySelector('.form')

let timerId


const createPromise = (position, delay) => {
  event.preventDefault();
  console.log("dela", dela.value);
  console.log("delayStep", delayStep.value);
  console.log("counter", counter.value);
  delay = Number(dela.value);
  position = 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      timerId = setInterval(() => {
        const shouldResolve = Math.random() > 0.3;
        position += 1;
        delay += Number(delayStep.value);
      if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${Number(position)} in ${delay}ms`);
      } else { 
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      if (Number(counter.value) === position)
        clearInterval(timerId);
   }, Number(delayStep.value));
    
  }, Number(dela.value));
    })
};

form.addEventListener('submit', createPromise)



// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

