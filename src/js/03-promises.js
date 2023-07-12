// all modules
import Notiflix from 'notiflix';

const selectors = {
  body: document.querySelector('body'),
  form: document.querySelector('form.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}


selectors.form.addEventListener('click', handlerPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handlerPromiseCreate(e) {
  e.preventDefault();

  let valueDelay = Number(selectors.delay.value);
  let step = Number(selectors.step.value);
  let amount = Number(selectors.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    let promiseDelay = valueDelay + step * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
