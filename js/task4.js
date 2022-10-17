const plusButton = document.querySelector('button[data-action="increment"]');

const minusButton = document.querySelector('button[data-action="decrement"]');

const resetButton = document.querySelector('button[data-action="reset"]');

const valueEl = document.querySelector("#value");

let counterValue = 0;

const plusButtonClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const minusButtonClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const resetButtonClick = () => {
  valueEl.textContent = 0;
};

plusButton.addEventListener("click", plusButtonClick);
minusButton.addEventListener("click", minusButtonClick);
resetButton.addEventListener("click", resetButtonClick);
