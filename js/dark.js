// Función para cambiar entre modo oscuro y claro
export const darkMode = () => {
  const switchBtn = document.getElementById("switch");
  const logoLight = document.querySelectorAll("[data-logo='light']");
  const logoDark = document.querySelectorAll("[data-logo='dark']");

  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    switchBtn.classList.toggle("active");

    if (document.body.classList.contains("dark")) {
      logoDark.forEach((logo) => {
        logo.style.display = "block";
      });
      logoLight.forEach((logo) => {
        logo.style.display = "none";
      });
    } else {
        logoDark.forEach((logo) => {
            logo.style.display = "none";
          });
          logoLight.forEach((logo) => {
            logo.style.display = "block";
          });
    }
  });
};
