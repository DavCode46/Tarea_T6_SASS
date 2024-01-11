import { validate } from "./validateForm.js";
import { burgerMenu } from "./burger.js";

const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  if (form) {
    form.addEventListener("submit", validate);
  }
  burgerMenu();
});
