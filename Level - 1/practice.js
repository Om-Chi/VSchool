
let galleryOfFoes = ["Babla the Funk", "Scion the Grudge", "Tempa the Misfit"]
function randomItem(min, max) {
    let mathR = Math.random() * (max - min + 1)
    let mathF = Math.floor(mathR) + min
    return mathF
   }
console.log(randomItem(0, galleryOfFoes.length))
   