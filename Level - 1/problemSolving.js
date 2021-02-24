//return Largest number in array

var manyNums = [4, 5, 1, 3, 13, 27, 18, 26, 32, 35, 37, 39, 1000, 1001, 857, 1]
let largeSt = [0]
//Need loop through each , conditional statement

function largestNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largeSt) {
            largeSt = array[i]
        }
    } return largeSt
} 
console.log(largestNum(manyNums))

// function findLargest(array) {
//     let largeSt = array[0]

//     array.forEach(element => {
//         if(element > largeSt) {
//             largeSt = element
//             return largeSt
//         } 
//     })
// } 
// findLargest(manyNums)






   

//Attemptssss - considered while loop

// count = 0
// manyNums.forEach(largeNum)
// function largeNum(item) {
//     while (count < manyNums.length) {
//         for (var i = 0; i < manyNums.length; i++) {
//             if (item[i+1] < manyNums[i]){
//                 continue
//                 count++
//             }else if (item[i+1] > manyNums[i]){
//                 return item
//             }
//         }console.log(item)
//     }
// }
//multiple loops are best for nested arrays/ multiple arrays or strings


//repeated Charaters
// var array = ["#3", "$$$", "C%4!", "Hey!"]
// var symbol = "!"
// const lettersWithStrings = (arr, char) => {
//     for(var i = 0; i < arr.length; i++) {
//         for(j = 0; j <arr[i].length; j++) {
//             if (arr[i][j] == char) {
//                 console.log(arr[i])
//         }
//     }
// }}

// lettersWithStrings(array, symbol)

//Divisible??

// function isDivisible(a, b) {
//     if (a % b === 0) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isDivisible(2, 12))