import { qs } from "./util.js";

const firSlotNumArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const fir = qs("#fir-slot");
const sec = qs("#sec-slot");
const trd = qs("#trd-slot");
const firBtn = qs('#fir-btn');
const secBtn = qs('#sec-btn');
const trdBtn = qs('#trd-btn');

let bFir = false;
let bSec = false;
let bTrd = false;

function firNumberUp() {
  if(bFir) return;
  fir.innerHTML = firSlotNumArr[Math.floor(Math.random()*9)];
  setTimeout(firNumberUp, 10);
}

function secNumberUp() {
  if(bSec) return;
  sec.innerHTML = firSlotNumArr[Math.floor(Math.random()*9)];
  setTimeout(secNumberUp, 10);
}

function trdNumberUp() {
  if(bTrd) return;
  trd.innerHTML = firSlotNumArr[Math.floor(Math.random()*9)];
  setTimeout(trdNumberUp, 10);
}

function btnAddEvent() {
  firBtn.addEventListener('click', (e) => {
    bFir = true;
  })
  secBtn.addEventListener('click', (e) => {
    bSec = true;
  })
  trdBtn.addEventListener('click', (e) => {
    bTrd = true;
  })
}


firNumberUp();
secNumberUp();
trdNumberUp();
btnAddEvent();


