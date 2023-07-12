
const startBtn = document.querySelector('button[data-start]');
const closeBtn = document.querySelector('button[data-stop]');
const background = document.querySelector('body');
let intervalColorChange;


startBtn.addEventListener('click', handlerStartRandomkColor);
closeBtn.addEventListener('click', handlerStopRandomkColor);
closeBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function handlerStartRandomkColor() {

startBtn.setAttribute('disabled', true);
 closeBtn.removeAttribute('disabled');
    
    intervalColorChange = setInterval(() => {
        background.style.backgroundColor = getRandomHexColor();
    }, 1000 
)
}

function handlerStopRandomkColor() {
    startBtn.removeAttribute('disabled');
    closeBtn.setAttribute('disabled', true);
    clearInterval(intervalColorChange);
}


