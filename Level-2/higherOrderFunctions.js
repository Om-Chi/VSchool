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
const arrNums = [2, 4, 8, 12, 5, 3, 7, 22]

//greater than= 5
const great5 = arrNums.filter(num => num >= 5)
console.log(great5)

//even Numbers
const evenNum = arrNums.filter(num => num % 2 === 0)
console.log(evenNum)


const strings = ["live", "shove", "mark", "thrive", "circle", "statue", "miraacle"]

// 5 or less
const fewer5 = strings.filter(string => string.length <= 5)
console.log(fewer5)


const toTheClub = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

//Don't belong
const belongNah = toTheClub.filter(them => them.member !== true)
console.log(belongNah)

//old Enough
const oldEnough = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const old = oldEnough.filter(them => them.age > 18)
console.log(old)

//////////////////////////////////////sort()////////////////////////////