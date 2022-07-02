"use strict";

const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main-menu-show");
});

mainMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.remove("main-menu-show");
});

const typed = new Typed(".typed", {
  strings: [
    "<i class= 'textAnimated' >Nahuel Martinez</i>",
    "<i class='textAnimated'>Desarrollador Web</i>",
  ],
  typeSpeed: 75,
  startDelay: 600,
  backSpeed: 75,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});
