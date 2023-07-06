import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = document.querySelector('.form');
 
ref.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let delay = Number(ref.delay.value);

   for (let i = 1; i <= ref.amount.value; i += 1) {
     createPromise(i, delay)
       .then(({ position, delay }) => {
         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
       })
       .catch(({ position, delay }) => {
         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
       });
     delay += Number(ref.step.value);
  }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const obj = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
}


