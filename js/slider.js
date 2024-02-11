"use strict";

export const slide = () => {
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

      if (currentSlidePos >= totalSliderItems)
        sliderNextBtn.setAttribute("disabled", "");

      sliderPrevBtn.removeAttribute("disabled");
    };

    sliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = () => {
      currentSlidePos--;
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

      if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");

      sliderNextBtn.removeAttribute("disabled");
    };

    sliderPrevBtn.addEventListener("click", slidePrev);

    const notEnoughItems = totalSliderItems <= 0;

    if (notEnoughItems) sliderNextBtn.setAttribute("disabled", "");

    sliderPrevBtn.setAttribute("disabled", "");
  };

  for (let i = 0; i < sliders.length; i++) {
    sliderInit(sliders[i]);
  }
};
