
// add ":" somehow - line 3????
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
//convert alphabet to uppercase
var upAlpha = alphabet.toUpperCase()
//split() alphabet
var newAlpha = upAlpha.split("")

function forception(ppl, alpha) {
    for (var i = 0; i < ppl.length; i++){
        var eachPpl = [ppl[i]]
        for(j = 0; j < eachPpl.length; j++) {
            var newArr = eachPpl.concat(alpha)
            console.log(newArr)
        }
    } return newArr
}
forception(people, newAlpha)

// for (var i = 0; i < people.length; i++){
//     if (people[i] % 2 === 0) {
//         people.splice([i], 0, newAlpha)
//     }
//     }
// console.log(people)

//END of Forception

//"HELLOhello"
// function strr(string1) {
//    var string = string1
//    var newUp = string.toUpperCase()
//    var newLow = string.toLowerCase()
//    return newUp + newLow
// }
// console.log(strr("hello"))

//find the length, divide by 2, math.floor() it
// function numLength(string2) {
//     var string = string2
//     var lengTH = Math.floor((string2.length) / 2)
//     return lengTH
// }
// console.log(numLength("SugarHoneyIceTea"))

// function sliced(string3) {
//     var string = string3
//     var halfLength = Math.floor(string.length / 2)
//     return string.slice(0, halfLength)
// }
// console.log(sliced("Strawberry"))

// function upLowr(string4) {
//     var string = string4
//     var halfLength = Math.floor(string.length / 2)
//     var firstHalf = string.slice(0, halfLength)
//     var secondHalf = string.slice(halfLength)
//     return firstHalf.toUpperCase() + secondHalf.toLowerCase()
// }
// console.log(upLowr("hello"))