const alertEl = document.querySelector('.alert');
const box = document.querySelector('.box');

const resultEl = document.querySelector('.result');
const key = document.querySelector('.key');
const which = document.querySelector('.which');
const locationE = document.querySelector('.location');
const code = document.querySelector('.code');


document.onkeydown = (e) => {
  alertEl.classList.add('hide');
  box.classList.remove('hide');
  
  let eResult = e.which;
  let eKey = e.key;
  let eLocation = e.location;
  let eCode = e.keyCode;

  resultEl.innerText = eResult;
  which.innerText = eResult;    
  key.innerText = eKey;
  locationE.innerText = eLocation;
  code.innerText = eCode;
}