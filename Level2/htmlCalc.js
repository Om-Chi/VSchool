const add = document.add


add.addEventListener("submit", (e) => {
    e.preventDefault()
    let a = parseInt(add.firstNum.value)
    let b = parseInt(add.secondNum.value)
    let c = a + b
    let x = document.getElementById("first")
    x.textContent = c
})

const sub = document.subtract

sub.addEventListener("submit", (v) => {
    v.preventDefault()
    let a = parseInt(sub.firstNum.value)
    let b = parseInt(sub.secondNum.value)
    let c = a - b
    let x = document.getElementById("second")
    x.textContent = c
})

const mult = document.multiply

mult.addEventListener("submit", (n) => {
    n.preventDefault()
    let a = parseInt(mult.firstNum.value)
    let b = parseInt(mult.secondNum.value)
    let c = a * b
    let x = document.getElementById("third")
    x.textContent = c
})

const divi = document.divide

divi.addEventListener("submit", (t) => {
    t.preventDefault()
    let a = parseInt(divi.firstNum.value)
    let b = parseInt(divi.secondNum.value)
    let c = a / b
    let x = document.getElementById("fourth")
    x.textContent = c
})