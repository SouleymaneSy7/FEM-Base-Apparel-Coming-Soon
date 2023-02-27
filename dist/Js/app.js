const label = document.querySelector(".form__label");
const input = document.querySelector(".form__input");
const errorIcons = document.querySelector(".error-icons");
const errorMessages = document.querySelector(".errors-messages");

input.addEventListener("input", (event) => {
  if (event.target.value.length == 0) {
    label.style.borderColor = "hsl(0, 93%, 68%)";
    label.style.borderWidth = "2px";

    errorIcons.style.opacity = "1";
    errorMessages.innerText =
      "Whoops! It looks like you forgot to add your email";
  } else if (
    event.target.value.includes("@") &&
    event.target.value.includes(".") &&
    event.target.value.length > 4
  ) {
    label.style.borderColor = "hsl(0, 36%, 70%)";
    label.style.borderWidth = "1px";

    errorMessages.innerText = "";
    errorIcons.style.opacity = "0";
  } else {
    label.style.borderColor = "hsl(0, 93%, 68%)";
    label.style.borderWidth = "2px";

    errorIcons.style.opacity = "1";
    errorMessages.innerText = "Please Provide a valid email";
  }
});
