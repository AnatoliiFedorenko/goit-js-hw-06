const textInput = document.querySelector("#validation-input");
const dataLengthEl = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
  const stringLength = event.currentTarget.value.length;

  if (stringLength === +dataLengthEl) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
});
