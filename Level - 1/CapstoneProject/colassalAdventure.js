const readlineSync = require ('readline-sync');

//Greet Player w/ message. Ask and store name in variable, const - QUESTION readline sync
// readlineSync.keyInPause("Welcome to the colossus of all adventures...Colossal Adventure")
// readlineSync.keyInPause("Travel far lands and defeat the worst villians that pillage and devastate the land.")
// readlineSync.keyInPause("Rules: Along the way you may win awards and gather items to help you on your way.\nWhen approached by an enemy you may cower and run\nbut you will lose HP.")
// readlineSync.keyInPause("However, if you stand your ground and defeat said foe\nyou will gain HP and more rewards!")
let playerOne = readlineSync.question('What is your name? ')
    console.log(`Greetings, ${playerOne} and safe travels...`)

//INVENTORY - array/object to store awards, and empty array to hold user's awards
let awardsToWin = ['Dagger', 'Book of Secrets', 'Shield', 'First-Aid', 'Snacks', 'Booster-Boots']
let playerInventory = {Player1: playerOne, HP: 25, Awards: ''}
    //player kills enemy, player is awarded items - push() items in player inventory
    //player hits 'p' or 'print', console prints players name, HP and inventory - some form of readline Sync input method

//Enemies at random ??? Its not working, remove these
let galleryOfFoes = ["Babla the Funk", "Scion the Grudge", "Tempa the Misfit"]
function pickEnemy(arr) {
    let result = Math.floor(Math.random() * arr.length)
    var enemyPicked = arr[result]
    return enemyPicked
}

//Random Random - for HP and chances to escape
const extraRandom = (max) => {
    let final = Math.floor(Math.random() * max) + 1
    return final
}
console.log(extraRandom(galleryOfFoes.length))

// while loop; Tell player to walk or check inventory
var hitPoints = playerInventory.HP
while (hitPoints > 0) {}
var userSelection = readlineSync.question('Would you like to take a walk? TYPE "w" or TYPE "p" to check inventory ')
if (userSelection === "p") {
    console.log(playerInventory)
    var userSelection = readlineSync.question('Would you like to take a walk? TYPE "w" or TYPE "p" to check inventory ')
//function: "w" equals random 1/4 chance of being approached to be attacked  
} else if (userSelection === "w") {
    var randomWalk = Math.floor((Math.random() * 4) + 1)
    if (randomWalk === 2) { //warn user, give option to run or fight
        var fightFlight = readlineSync.question('Look out!!! An enemy approaches! What will you do? Type "run" or "attack"')
        if (fightFlight === "fight") {
            //pickEnemy function
            console.log('pow, Slice, boom!')
            //must deduct HP
            var newHP = extraRandom(hitPoints)
            hitPoints - newHP
        }
    }else if (randomWalk !== 2) {}//extraRandom to receive awardsToWin
}else {
    console.log('You must choose ' + userSelection)
}
console.log(userSelection)
    // attack or run //condition if approached by enemy or not: 2 user is approached
    // if run, random amount of damage, 50% of escaping, user receives message and must "w" - QUESTION readline sync
    // if attack: Warn user, a random enemy out of 3 is selected, random amount of damage - SINGLE KEY, MATH.RANDOM(), QUESTION readline sync 
    //     show current HP after killing enemy, continue walking - WHILE LOOP
    // if enemy wins, cool message, game over - SINGLE KEY
