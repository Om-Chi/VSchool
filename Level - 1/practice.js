// const readlineSync = require('readline-sync');

// //Welcome message
// //Rules
// readlineSync.keyInPause("Welcome to the colossus of all adventures...Colossal Adventure")
// readlineSync.keyInPause("Travel far lands and defeat the worst villians that pillage and devastate the land.")
// readlineSync.keyInPause("Rules: Along the way you may win awards and gather items to help you on your way.\nWhen approached by an enemy you may cower and run\nbut you will lose HP.")
// readlineSync.keyInPause("However, if you stand your ground and defeat said foe\nyou will gain HP and more rewards!")
// //User input name
// let playerOne = readlineSync.question('What is your name? ')
// console.log(`Greetings, ${playerOne} and safe travels...`)

//player - array/object to store awards, and empty array to hold user's awards
// let awardsToWin = ['Dagger', 'Book of Secrets', 'Shield', 'First-Aid', 'Snacks', 'Booster-Boots']
// let consolationPrize = ['snacks', 'beets&Greens', 'water', 'sugar water', 'more snacks', 'ice', 'goat milk']
// let player = {Player1: playerOne, HP: 25}
// let awards = []

//array of Enemies
let galleryOfFoes = [{enemy: "Babla the Funk", attackPTS: 10}, {enemy: "Scion the Grudge", attackPTS: 20}, {enemy: "Tempa the Misfit", attackPTS: 30}]
<<<<<<< HEAD
let newArray = []
=======
let array = []
>>>>>>> d522d2011b10b49657e5149e41fdb89da581c836
//FUNCTIONS
const printPlayerInfo = (selection) => {
    //print player info & inventory
   console.log(player)
   console.log(awards)
}

function randomItem(min, max) {
    let mathR = Math.random() * (max - min + 1)
    let mathF = Math.floor(mathR) + min
    return mathF
}

// const theFight = (max) => {
//     let winLose = Math.floor(Math.random() * max) + 1
//     if (winLose % 2 === 0) {
//         console.log('Congratulaions! You have defeated the opponent!')
//     }else {
//         console.log("Shame! Continue on your journey and grow stronger!")
//     }
// }
// theFight(40)

const prizes = () => {
    var popped = galleryOfFoes.pop()
<<<<<<< HEAD
    return popped
}
newArray.push(prizes())
console.log(newArray)
=======
    array.push(popped)
    console.log(array)
}
prizes()

>>>>>>> d522d2011b10b49657e5149e41fdb89da581c836
