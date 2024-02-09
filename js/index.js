import { validate, closeSuccessContainer } from "./validateForm.js";
import { burgerMenu } from "./burger.js";
import { slider } from "./slider.js";

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

  if (document.getElementById("slider-inner")) {
    slider();
  }
});
