function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColorElent = document.querySelector(".color");
const body = document.querySelector("body");

const changeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorElent.textContent = randomColor;
};

button.addEventListener("click", changeColor);
