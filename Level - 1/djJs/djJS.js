//#container
//.beatOne
//.beatTwo
//.collect   onkeydown="redKey(event)" onkeyup="yellowKey()"

var clickBeats = document.getElementById("beatOne")
var keyBeats = document.getElementById("beatTwo")

//RED &YELLOW//
function mDown() {
    clickBeats.style.backgroundColor = "red"
}

window.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        return clickBeats.style.backgroundColor = "mediumvioletred"
    }
})

function mUp() {
    clickBeats.style.backgroundColor = "yellow"
}

window.addEventListener("keydown", function(event) {
    if (event.key === "y") {
        return clickBeats.style.backgroundColor = "gold"
    }
})

//GREEN &BLUE//
function dbClick () {
    keyBeats.style.backgroundColor = "green"
}

window.addEventListener("keydown", function(event) {
    if (event.key === "g") {
        return keyBeats.style.backgroundColor = "chartreuse"
    }
})

function hover() {
    keyBeats.style.backgroundColor = "blue"
}

window.addEventListener("keydown", function(event) {
    if (event.key === "b") {
        return keyBeats.style.backgroundColor = "skyblue"
    }
})

//ORANGE//
var  outSide = document.querySelectorAll(".collect")

//letters on the Keyboard should correlate with the colors as well. i.e. "r" for red