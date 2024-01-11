const form = document.getElementById("form");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("telephone");
const message = document.getElementById("message");
const messageList = document.getElementById("messageList");
const successMessage = document.querySelector(".success__message-container");


export const closeSuccessContainer = () => {
  successMessage.style.display = "none";
  form.style.display = "block";
};

const onChange = (item, error) => {
  const input = document.getElementById(item);
  const errorMessage = document.getElementById(error);

  // Verificar si los elementos existen antes de añadir el event listener
  if (input && errorMessage) {
    input.addEventListener("input", () => {
      errorMessage.innerHTML = "";
      input.style.outline = "none";
    });
  }
};

onChange("name", "messageList");
onChange("surname", "messageList");
onChange("email", "messageList");
onChange("telephone", "messageList");
onChange("message", "messageList");

let errorsArray = [];

export const validate = (e) => {
  e.preventDefault();

  errorsArray = [];

  !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(username.value.trim()) &&
    (errorsArray.push(
      "El campo nombre solo puede contener letras y espacios en blanco"
    ),
    (username.style.outline = "2px solid red"));

  !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(surname.value.trim()) &&
    (errorsArray.push(
      "El campo apellidos solo puede contener letras y espacios en blanco"
    ),
    (surname.style.outline = "2px solid red"));

  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email.value.trim()
  ) &&
    (errorsArray.push("El Correo debe tener el formato @correo.es"),
    (email.style.outline = "2px solid red"));

  !/^\d{7,14}$/.test(phone.value.trim()) &&
    (errorsArray.push(
      "El teléfono debe contener entre 7 y 14 dígitos numéricos"
    ),
    (phone.style.outline = "2px solid red"));

  message.value.trim().length < 10 &&
    (errorsArray.push("Mensaje muy corto, mínimo 10 caracteres"),
    (message.style.outline = "2px solid red"));

  if (errorsArray.length > 0) {
    messageList.style.color = "red";
    messageList.innerHTML = errorsArray.join("<br>");
  } else {
    form.style.display = "none";
    successMessage.style.display = "block";
    setTimeout(() => {
      form.reset();
      messageList.innerHTML = "";
    }, 3000);
  }
};
