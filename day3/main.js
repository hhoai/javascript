const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".openBtn");
const closeIcon = document.querySelector(".closeIcon");
const closeBtn = document.querySelector(".closeBtn");

const toggleShow = (el, style) => {
  el.classList.toggle(style);
};

const activeModal = (e) => {
  e.onclick = () => {
    toggleShow(modal, "hide");
  };
};

activeModal(openBtn);
activeModal(closeIcon);
activeModal(closeBtn);

