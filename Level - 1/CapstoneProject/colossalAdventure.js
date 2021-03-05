const readlineSync = require('readline-sync');

//Greet Player w/ message. Ask and store name in variable, const - QUESTION readline sync
// readlineSync.keyInPause("Welcome to the colossus of all adventures...Colossal Adventure")
// readlineSync.keyInPause("Travel far and defeat the worst villians that pillage and devastate the land.")
// readlineSync.keyInPause("Rules: Along the way you may win awards and gather items to help you on your way.\nWhen approached by an enemy you may cower and run\nbut you will lose HP.")
// readlineSync.keyInPause("However, if you stand your ground and defeat said foe\nyou will gain HP and more rewards!")
let playerOne = readlineSync.question('What is your name? ')
console.log(`Greetings, ${playerOne} and safe travels...`)

//player - array/object to store awards, and empty array to hold user's awards
let awardsToWin = ['Dagger', 'Book of Secrets', 'Shield', 'First-Aid', 'Snacks', 'Booster-Boots']
let consolationPrize = ['snacks', 'beets&Greens', 'water', 'sugar water', 'more snacks', 'ice', 'goat milk']
let player = {Player1: playerOne, HP: 25}
let awards = []
    //player kills enemy, player is awarded items - push() items in player awards
    //player hits 'p' or 'print', console prints players name, HP and player - some form of readline Sync input method


let galleryOfFoes = ["Babla the Funk", "Scion the Grudge", "Tempa the Misfit"]

function randomItem(min, max) {
    let mathR = Math.random() * (max - min + 1)
    let mathF = Math.floor(mathR) + min
    return mathF
}

const prizes = () => {
    var popped = awardsToWin.pop()
    awards.push(popped)
    console.log(awards)
}

//Random Random - for HP and chances to escape
const extraRandom = (max) => {
    let final = Math.floor(Math.random() * max) + 1
    return final
}

const theFight = (max) => {
    let winLose = Math.floor(Math.random() * max) + 1
    if (winLose % 2 === 0) {
        readlineSync.keyInPause('Congratulaions! You have defeated the opponent!')
    }else {
        readlineSync.keyInPause("Shame! Continue on your journey and grow stronger!")
    }
}



// while loop; Tell player to walk or check player
var hitPoints = player.HP
const gameOver = false
while (gameOver === false) {
var userSelection = readlineSync.question('Would you like to take a walk? TYPE "w" or TYPE "p" to check player ')
if (userSelection === "p") {
    console.log(player)
    console.log(awards)
    var userSelection = readlineSync.question('Would you like to take a walk? TYPE "w" or TYPE "p" to check player ')
//function: "w" equals random 1/4 chance of being approached to be attacked  
} else if (userSelection === "w") {
    var randomWalk = extraRandom(5)
    if (randomWalk === 2 || randomWalk === 3) { //warn user, give option to run or fight & introduce enemy
        let index = randomItem(0, galleryOfFoes.length - 1)
        var fightFlight = readlineSync.question(`Look out!!! ${galleryOfFoes[index]} approaches! What will you do? Type "run" or "fight" `, {limit: ['run', 'fight']})
        var mightRun = extraRandom(2)
        if (fightFlight === "fight") {
            readlineSync.keyInPause('pow, Slice, boom!')
            theFight(20)
            let deductHP = extraRandom(player.HP)
            player.HP -= deductHP
            // prizes(awards)
            console.log(player)
            console.log(prizes(awards))
            hitPoints
        }else if (fightFlight === "run" && mightRun === 1) {
            readlineSync.keyInPause(`You were unable to escape, and ${galleryOfFoes[index]} attacks you.`)
            readlineSync.keyInPause('hi-Ya, ooh, Ouch, Wam!')
            theFight(30)
            let deductHP = extraRandom(player.HP)
            player.HP -= deductHP
            //prizes(awards)
            console.log(player)
            console.log(prizes(awards))
            hitPoints
            
        }else if (fightFlight === "run" && mightRun === 2) {
            readlineSync.keyInPause("That was close, but you were able to escape.")
            let deductHP2 = extraRandom(player.HP)
            player.HP -= deductHP2
            console.log(player)
            console.log(awards)
            hitPoints
        }
    }else if (randomWalk !== 2 === randomWalk !== 3) {
        readlineSync.keyIn(`Traveling can be rough. You found something along the way`)
        var luckitems = randomItem(0, consolationPrize.length - 1)
        let newItem = consolationPrize[luckitems]
        awards.push(newItem)
        console.log(player)
        console.log(awards)
        hitPoints
        //needs to loop back to the beginning
    }
}}
//console.log(userSelection)
    // attack or run //condition if approached by enemy or not: 2 user is approached
    // if run, random amount of damage, 50% of escaping, user receives message and must "w" - QUESTION readline sync
    // if attack: Warn user, a random enemy out of 3 is selected, random amount of damage - SINGLE KEY, MATH.RANDOM(), QUESTION readline sync 
    //     show current HP after killing enemy, continue walking - WHILE LOOP
    // if enemy wins, cool message, game over - SINGLE KEY
