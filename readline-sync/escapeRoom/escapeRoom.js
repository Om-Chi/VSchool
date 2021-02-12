const readline = require("readline-sync");

var uLive = true
while(uLive === true) {
    const decision = readline.question("You have five paths to choose from. Choose wisely. Type one through five to decide: ");
    if(decision === "one") {
        console.log("You found the key, now find the door!")
        uLive = true
    }else if(decision === "two") {
        console.log("You found the hole...and fell into it")
        uLive = false
    }else if(decision === "three") {
        console.log("You fell into a hole...forever")
        uLive = false
    }else if(decision === "four") {
        const keyPath = readline.question("You found the door. Which path carries the key? ");
        if (keyPath === "one") {
            console.log("You escaped the Escape Room")
            uLive = false
        }else
            uLive = true
    }else if(decision === "five") {
        console.log("You found a whole.")
        uLive = false
    }
}
