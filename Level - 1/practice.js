const readlineSync = require('readline-sync');

//Welcome message
//Rules
readlineSync.keyInPause("Welcome to the colossus of all adventures...Colossal Adventure")
readlineSync.keyInPause("Travel far lands and defeat the worst villians that pillage and devastate the land.")
readlineSync.keyInPause("Rules: Along the way you may win awards and gather items to help you on your way.\nWhen approached by an enemy you may cower and run\nbut you will lose HP.")
readlineSync.keyInPause("However, if you stand your ground and defeat said foe\nyou will gain HP and more rewards!")
//User input name
let playerOne = readlineSync.question('What is your name? ')
console.log(`Greetings, ${playerOne} and safe travels...`)

//player - array/object to store awards, and empty array to hold user's awards
let awardsToWin = ['Dagger', 'Book of Secrets', 'Shield', 'First-Aid', 'Snacks', 'Booster-Boots']
let consolationPrize = ['snacks', 'beets&Greens', 'water', 'sugar water', 'more snacks', 'ice', 'goat milk']
let player = {Player1: playerOne, HP: 25}
let awards = []

//array of Enemies
let galleryOfFoes = [{enemy: "Babla the Funk", attackPTS: 10}, {enemy: "Scion the Grudge", attackPTS: 20}, {enemy: "Tempa the Misfit", attackPTS: 30}]

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

const theFight = () => {
    let winLose = Math.floor(Math.random() * 2) + 1
    if (winLose === 1) {
        console.log('Congratulaions! You have defeated the opponent!')
    }else {
        console.log("Shame! Continue on your journey and grow stronger!")
    }return winLose
    
}
const toRun = (selection) => {
    //return option to "walk" or "print inventory"
}
const toWalk = (selection) => {
    //random message to find something along the way
    //return option to "walk" or "print inventory"
}
//Random Random - for HP and chances to escape
const extraRandom = (max) => {
    let final = Math.floor(Math.random() * max) + 1
    return final
}

//USER INPUT
var userSelection = readlineSync.question('Would you like to take a walk? TYPE "w" or TYPE "p" to check player ', {limit:'wp'})
if (userSelection === 'p') {
    console.log(printPlayerInfo("p"))
}
if (userSelection === 'w') {
    console.log("As you continue on your journey...")
}


player.hp = 25
//while (player.HP > 0) {}
var randomWalk = extraRandom(4)
if (randomWalk === 2) {
    toFight()
    player.HP -= foe.attackPTS
    console.log(player)
    console.log(awards)
}
var fightFlight = readlineSync.question(`Look out!!! ${galleryOfFoes[index]} approaches! What will you do? Type "run" or "fight" `)