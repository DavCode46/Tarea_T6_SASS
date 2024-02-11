// export const slider = () => {
//     let sliderInner = document.getElementById("slider-inner");
//     let images = sliderInner.querySelectorAll("img");

//     let index = 1;
//     let direction = 1;
//   setInterval(() => {
//     let percentage = index * -100;

//     sliderInner.style.transform = "translateX(" + percentage + "%)";

//     if (index >= images.length - 1 || index <= 0) {
//       direction *= -1;
//     }
//     index += direction;
//   }, 5000);
// };

"use strict";

  const sliders = document.querySelectorAll("[data-slider]");

  const sliderInit = (currentSlider) => {
    const sliderContainer = currentSlider.querySelector(
      "[data-slider-container]"
    );
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");
  
    const totalSliderVisibleItems =
      getComputedStyle(currentSlider).getPropertyValue("--slider-items");
  
    const totalSliderItems =
      sliderContainer.childElementCount - totalSliderVisibleItems;
  
    let currentSlidePos = 0;
  
    const slideNext = () => {
      currentSlidePos++;
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

      if (currentSlidePos >= totalSliderItems) sliderNextBtn.setAttribute('disabled', '');

      sliderPrevBtn.removeAttribute('disabled');
      
      
    };
  
    sliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = () => {
      currentSlidePos--;
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

      if (currentSlidePos <= 0) sliderPrevBtn.setAttribute('disabled', '');

      sliderNextBtn.removeAttribute('disabled');
    };
  
    sliderPrevBtn.addEventListener("click", slidePrev);

    const notEnoughItems = totalSliderItems <= 0;

    if(notEnoughItems) sliderNextBtn.setAttribute('disabled', '');
    
    sliderPrevBtn.setAttribute('disabled', '');
    
  };
  
  for (let i = 0; i < sliders.length; i++) {
    sliderInit(sliders[i]);
  }
  

