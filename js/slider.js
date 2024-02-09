let sliderInner = document.getElementById("slider-inner");
let images = sliderInner.querySelectorAll("img");

let index = 1;
let direction = 1;

export const slider = () => {
  setInterval(() => {
    let percentage = index * -100;

    sliderInner.style.transform = "translateX(" + percentage + "%)";

    if (index >= images.length - 1 || index <= 0) {
      direction *= -1;
    }
    index += direction;
  }, 5000);
};
