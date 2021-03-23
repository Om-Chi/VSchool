////////////////////////////////////map()////////////////////////////////////
// const nums = [1, 2, 3, 4, 5, 6 , 7, 8, 9]

// //toString
// const stringed = nums.map(function(num) {
//     return num.toString()
// })

// console.log(stringed)

// //Doubles
// const doubles = nums.map(num => num * 2)
//  console.log(doubles)


// const names = ["dolly", "mavis", "simon", "garfunkle", "blaire", "brooke", "graye"]
// //Capitalize String
// const capital = names.map(function(name) {
//     let first = name.slice(0, 1)
//     let second = first.toUpperCase()
//     let third = name.slice(1)
//     return second + third
// })
//  console.log(capital)

//  const randoms = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// const moreNames = randoms.map(random => random.name)
// console.log(moreNames)

// //Old Enough
// const namez = randoms.map(function(random) {
//     if (random.age >= 18) {
//         console.log(random.name + " is old enough.")
//     }else {
//         console.log(random.name + " is not old enough.")
//     }
// })

// const wrapped = randoms.map(random => "<h1>"+random.name+"</h1><h2>"+random.age+"</h2>")

// console.log(wrapped)

/////////////////////////////////////filter()////////////////////////////////
// const arrNums = [2, 4, 8, 12, 5, 3, 7, 22]

// //greater than= 5
// const great5 = arrNums.filter(num => num >= 5)
// console.log(great5)

// //even Numbers
// const evenNum = arrNums.filter(num => num % 2 === 0)
// console.log(evenNum)


// const strings = ["live", "shove", "mark", "thrive", "circle", "statue", "miraacle"]

// // 5 or less
// const fewer5 = strings.filter(string => string.length <= 5)
// console.log(fewer5)


// const toTheClub = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// //Don't belong
// const belongNah = toTheClub.filter(them => them.member !== true)
// console.log(belongNah)

// //old Enough
// const oldEnough = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const old = oldEnough.filter(them => them.age > 18)
// console.log(old)

//////////////////////////////////////sort()////////////////////////////

// //ascending
// const arrNum = [23, 45, 78, 4, 89, 2, ]

// arrNum.sort(function(a, b) {
//     return a - b
// })

// console.log(arrNum)

// //descending
// arrNum.sort(function(a, b) {
//     return b - a
// })

// console.log(arrNum)

// //string length, ascending

// const theStrings = ["dollar", "me", "fructose", "jawamabam", "larb", "quest", "tik"]

// theStrings.sort(function(a, b){
//     return a.length - b.length
// })
// console.log(theStrings)

// //string, alpha-tise
// theStrings.sort(function(a, b) {
//     if (a < b) {
//         return -1
//     } else if (a > b) {
//         return 1
//     }
//     return 0
// })

// console.log(theStrings)

// //object, age ascending
// const ages = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]

// ages.sort(function(a, b) {
//     return a.age - b.age
// })

// console.log(ages)
////////////////////////////////////reduce()/////////////////////////////////////
const theNums = [21, 35, 46, 57, 68, 79, 80, 92]

//add nums in array
const reduced = theNums.reduce((acc, current) => acc + current)

console.log(reduced)

// const mergeEm = theNums.reduce(function(final, nums){
    
//     return 
// }, "")
// console.log(mergeEm)

// voters, count
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const theVoted = voters.reduce(function(final, voter){
    if(voter.voted) {
        final++
    }
    return final
}, 0)
console.log(theVoted)

//flatten array of arrays
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatFlat = arrays.reduce(function(final, arr) {
    final.concat(arr)
    final.push()
    return final
}, 0)

console.log(flatFlat)
//////////// random() sucks

/////////////////////////////////////////////////////////////////////////

