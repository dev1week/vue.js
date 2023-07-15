const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = input.value;
  const linstItemEl = document.createElement("li");
  linstItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

button.addEventListener("click", addGoal);
