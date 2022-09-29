let del = document.querySelector('#del')
let ac = document.querySelector('#ac')
let sign = document.querySelector('#sign')
let percentage = document.querySelector('#percentage')
let divide = document.querySelector('#divide')
let times = document.querySelector('#times')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let equals = document.querySelector('#equals')
let dot = document.querySelector('#dot')
let zero = document.querySelector('#zero')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let result = document.querySelector('#result')

let calcOperatorsAndNumbers = [divide, times, plus, minus, dot, one, two, three, four, five, six, seven, eight, nine]

function addToResult(e) {
    result.innerText = result.innerText + e
}

function calculate() {
    result.innerText = result.innerText.replace("x", "*")
    result.innerText = result.innerText.replace("÷", "/")
    result.innerText = eval(result.innerText).toFixed(2)
}

function calculatePercentage() {
    calculate()
    result.innerText = eval(result.innerText / 100)
}

function deleteDigit() {
    result.innerText = result.innerText.slice(0, -1)

    if (result.innerText == "") {
        result.innerText = "0"
    }
}

function addAlgebra() {
    if (result.innerText != "0") {
        result.innerText = result.innerText + this.innerText
    } else {
        result.innerText = this.innerText
    }
}

function setZero() {
    result.innerText = "0"
}


del.addEventListener("click", deleteDigit, false)

calcOperatorsAndNumbers.forEach(element => {
    element.addEventListener("click", addAlgebra, false)
});

ac.addEventListener("click", setZero, false)

equals.addEventListener("click", calculate, false)

percentage.addEventListener("click", calculatePercentage, false)