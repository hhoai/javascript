const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');


const toggleShow = (el, style) => {
  el.classList.toggle(style);
};

const addClass = (el, style) => {
  el.classList.add(style);
}

const removeClass = (el, style) => {
  el.classList.remove(style);
}

let click = 0;

searchBtn.onclick = (e) => {
  if (click%2 != 0) {
    addClass(search, "closeBox");
    removeClass(search, "openBox");
    toggleShow(searchBtn, "close");
  }
  else {
    addClass(search, "openBox");
    toggleShow(searchBtn, "close");
    removeClass(search, "closeBox");
  }
  click = click + 1;
  console.log(click);
}
