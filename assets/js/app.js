const form = document.getElementById("formUser");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" aria-label="Close"></button>',
    "</div>",
  ].join("");

  // Agregar evento de cierre para ocultar el alert
  wrapper.querySelector(".btn-close").addEventListener("click", () => {
    wrapper.remove();
    alertPlaceholder.classList.remove("show");
  });

  alertPlaceholder.classList.add("show"); // Añade clase show para expandir
  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {});
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements["name"].value.trim();
  const lastname = form.elements["lastName"].value.trim();
  const email = form.elements["email"].value.trim();
  newUser(name, lastname, email);
  form.reset();
});

function newUser(name, lastname, email) {
  if (name !== "" || lastname !== "" || email !== "") {
    const message = "Bienvenido " + name + " " + lastname;
    appendAlert(message, "success");
  } else {
    appendAlert("No hay datos registrados", "danger");
  }
}
