const para = document.getElementById('caught')

//Goomba button
const form1 = document.GInput
form1.addEventListener('submit', function(e) {
    e.preventDefault()
    let gotcha = parseInt(form1.catch.value)
    baddiesArr.push(gotcha)
    form1.catch.value = ""
})
//BOBomb button
const form2 = document.BInput
form2.addEventListener('submit', function(v) {
    v.preventDefault()
    let gotEm = parseInt(form2.catches.value)
    baddiesArr.push(gotEm)
    form2.catches.value = ""
})
//CheepCheep button
const form3 = document.CInput
form3.addEventListener('submit', function(a) {
    a.preventDefault()
    let gotIt = parseInt(form3.catching.value)
    baddiesArr.push(gotIt)
    form3.catching.value = ""
})

const formTotal = document.total

formTotal.addEventListener('submit', function(t) {
    t.preventDefault()
    let x = Number(document.getElementById("goomba").value) * 5
    let y = Number(document.getElementById("bobomb").value) * 2
    let z = Number(document.getElementById("cheep").value) * 10
    

    let a = x + y + z

    document.getElementById('C').value = a
    function reset() {
        document.getElementById("caught").reset()
    }

    //Coin Audio Function
    let coin = document.getElementById("coins")
    coin.play()
})
