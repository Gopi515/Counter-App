let value = document.getElementById("counter");
let plusButton = document.getElementById("increase");
let minusButton = document.getElementById("decrease");

value.textContent = 0;

plusButton.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) + 1;
});

minusButton.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) - 1;
});

