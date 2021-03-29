
//**  Lesson 2: Arrays; Rotate items in a an array to teh Right*/
// var array = [3, 8, 9, 7, 6] //any array
// function rotate(arr, k) {
//     if (arr.length > k) { //in case, the length of the array exceeds the number of rotations
//         arr.unshift(arr.splice(-k))
//     }else {//will iterate the amount of rotations provided until reached
//         i = 0
//         while(i < k) {
//             arr.unshift(arr.splice(-1))
//             i++
//         }
//     }return arr
// //this is to rotate to the right, if rotating to the left: replace .unshift() with .pop() and .splice() from the beginning not at -1/-k
// }
// console.log(rotate(array, 3))



// function solution(A) {
//     let N = [...A]
//     N.sort(function(a, b) {return b-a})
//     while (N.length) {
//         if (N[0]==N[1]) {
//             N.splice(0,2) 
//         } else if (N[1]==N[2]){
//             N.splice(1, 2)
//         }
//         if(N[1]==undefined) {
//             return parseInt(N.join(""))
//         }
//     }
// }

// const nums = [1, 4, 4, 6, 8, 8, 6]
// const moreNums = [9, 3, 9, 3, 9, 7, 9]
// console.log(solution(moreNums))

////////Lesson 3 FrogJump



// let together = 2
// let jumps = 0
// while (together < 200) {
//     together += 10
//     jumps++}

// console.log(jumps) //20 jumps

// function frogJmp(x, y, D) { //unable to properly return jumps
//     let together = x
//     let jumps = 0
//     while (together < y) {
//         together += D
//         jumps++
//     }
//     console.log(jumps)
// }
// frogJmp(50, 100000000, 26)

//create count -> find min -> find max -> as long as 
// function sumAll([a, b]) {
//     plusOne = 1 //maybe zero
//     let min = Math.min(a, b)
//     let max = Math.max(a, b)
//     while (min < max) {
//         plusOne++
//     }

// }

// plusOne = 1 //maybe zero
// let min = Math.min(10, 5)
// let max = Math.max(10, 5)
// while (min < max) {
//     plusOne++}
// console.log(typeof plusOne) //gives me no typeof, of any kind of input
    

// //research - find min & max then use reduce
// function sumAll(arr) {
//     let eList = []
//     let min = Math.min(5, 10)
//     let max = Math.max(5, 10)

//  for(var i = min; i <= max; i++) {
//     eList.push(i)
//  }
//  const newList = eList.reduce((final, num) => final += num)
// }
// console.log(newList)

function sumAll(arr) {
    let eList = 0
    let min = arr[0]
    let max = arr[1]
    for(var i = min; i <= max; i++) {
        eList += i
        console.log(eList)
    }
    return eList
}
console.log(sumAll([5, 10]))