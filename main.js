import "./style.scss";

const screenLast = document.querySelector(".app__screen-last");
const screenCurrent = document.querySelector(".app__screen-current");

let valueLast = "",
  valueCurrent = "",
  valueCalc = "";

(() => {
  const btnAll = document.querySelectorAll(".app__buttons button");

  btnAll.forEach((element) => {
    element.addEventListener(`click`, click);
  });
})();

function click(event) {
  if (event.target.attributes[0] === undefined)
    updateScreenCurrent(event.target.innerText);
  else operate(event.target.attributes[0].value);
}

function operate(a) {
  switch (a) {
    case "CLEAR":
      clear();
      break;
    case "DELETE":
      delet();
      break;
    case "=":
      if (screenLast.innerText == "" || screenCurrent.innerText == "") break;

      updateScreenLast(`${valueCurrent}`);
      valueCalc = parseFloat(eval(valueLast).toFixed(2));
      delet();
      updateScreenCurrent(valueCalc);

      break;
    default:
      if (screenCurrent.innerText == "") break;
      updateScreenLast(`${valueCurrent}${a}`);
      updateScreenCurrent();
  }
}

function clear(a) {
  updateScreenCurrent(a);
}

function delet(a) {
  updateScreenLast(a);
  clear(a);
}
function updateScreenLast(a) {
  if (a === undefined) screenLast.innerText = "";
  else screenLast.innerText += a;

  valueLast = screenLast.innerText;
}

function updateScreenCurrent(a) {
  if (a === undefined) screenCurrent.innerText = "";
  else screenCurrent.innerText += a;

  valueCurrent = screenCurrent.innerText;
}
