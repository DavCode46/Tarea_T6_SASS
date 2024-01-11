const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-nav");
export function burgerMenu() {
  function toggleScroll() {
    if (
      burger.classList.contains("is-active") &&
      mobileMenu.classList.contains("is-active") &&
      window.innerWidth < 1024
    ) {
      if (document.querySelector(".contact__heading")) {
        document.querySelector(".contact__heading").style.display = "none";
      }
      // Detener el scroll cuando ambos elementos están activos y el ancho de la ventana es menor a 1024px
      document.body.style.overflow = "hidden";
    } else {
      if (document.querySelector(".contact__heading")) {
        document.querySelector(".contact__heading").style.display = "block";
      }
      // Volver a habilitar el scroll en otros casos
      document.body.style.overflow = "";
    }
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    toggleScroll();
  });

  window.addEventListener("resize", () => {
    // Manejar el evento resize para verificar el estado y restablecer el scroll según corresponda
    toggleScroll();
  });
}
