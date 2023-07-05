const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let isActive = true;
let intervalID = null;

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopColor);

function changeColor() {
    if (isActive) {
        console.log('Start');
        isActive = false;
        btnStart.disabled = true;
        intervalID = setInterval((i) => { document.body.style.backgroundColor = (getRandomHexColor()) }, 1000);
        console.log(intervalID);
         } };


function stopColor() {
    clearInterval(intervalID);
       if (isActive) {
           btnStart.disabled = false;
           } else {
           btnStart.disabled = false;      
    }
    isActive = true;    
    };

// генерування кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
