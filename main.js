import './style.scss'

const screenLast = document.querySelector('.app__screen-last')
const screenCurrent = document.querySelector('.app__screen-current')

let varLast = ``, varCurrent = ``, varCalc = ``

initListeners()

function initListeners() {
    let btnClear = document.querySelector('.btnClear')
    let btnDelete = document.querySelector('.btnDelete')
    let btnDevide = document.querySelector('.btnDevide')
    let btnMultiply = document.querySelector('.btnMultiply')
    let btnSubtract = document.querySelector('.btnSubtract')
    let btnAdd = document.querySelector('.btnAdd')
    let btnOperate = document.querySelector('.btnOperate')
    let btnDef = document.querySelectorAll(`.app__buttons button:not([class])`);

    btnClear.addEventListener(`click`, clear);
    btnDelete.addEventListener(`click`, del);
    btnDevide.addEventListener(`click`, devide);
    btnMultiply.addEventListener(`click`, multiply);
    btnSubtract.addEventListener(`click`, subtract);
    btnAdd.addEventListener(`click`, add);
    btnOperate.addEventListener(`click`, operate);

    btnDef.forEach(element => {
        element.addEventListener(`click`, def);
    });
}

function def(e) {
    varCurrent += e.target.innerText
    updateScreen()
}

function add() {
    if (screenCurrent.innerText == ``) return

    varLast += `${screenCurrent.innerText}+`
    updateScreen()
    clear()
}

function subtract() {
    if (screenCurrent.innerText == ``) return

    varLast += `${screenCurrent.innerText}-`
    updateScreen()
    clear()
}

function multiply() {
    if (screenCurrent.innerText == ``) return

    varLast += `${screenCurrent.innerText}*`
    updateScreen()
    clear()
}

function devide() {
    if (screenCurrent.innerText == ``) return
    varLast += `${screenCurrent.innerText}/`

    updateScreen()
    clear()
}

function operate() {
    if (screenLast.innerText == ``) return

    varLast += screenCurrent.innerText
    varCalc = eval(varLast).toFixed(2)
    del()
    
    varCurrent = varCalc
    updateScreen()
}

function clear() {
    varCurrent = ``
    updateScreen()
}

function del() {
    varLast = ``
    varCurrent = ``
    updateScreen()
}

function updateScreen() {
    screenLast.innerText = `${varLast}`
    screenCurrent.innerText = `${varCurrent}`
}