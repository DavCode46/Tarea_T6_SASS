import { validate, closeSuccessContainer } from "./validateForm.js";
import { burgerMenu } from "./burger.js";
import { slide } from "./slider.js";
import { darkMode } from "./dark.js";

const form = document.getElementById("form");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("DOMContentLoaded", () => {
  if (form) {
    form.addEventListener("submit", validate);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      setTimeout(closeSuccessContainer, 300);
    });
  }
  burgerMenu();
  darkMode();

  document.querySelector("[data-slider]") && slide();
  
});
