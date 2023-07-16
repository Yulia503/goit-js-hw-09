import Notiflix from 'notiflix';

const selectors = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submitButton: document.querySelector('button[type="submit"]'),
};

selectors.form.addEventListener('submit', event => event.preventDefault());
selectors.submitButton.addEventListener('click', handleFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormSubmit() {
  const delayValue = selectors.delayInput.valueAsNumber;
  const stepValue = selectors.step.valueAsNumber;
  const amountValue = selectors.amount.valueAsNumber;

  for (let i = 0; i < amountValue; i += 1) {
    const position = i + 1;
    const delay = delayValue + i * stepValue;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}