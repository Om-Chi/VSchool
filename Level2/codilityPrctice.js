
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



// let together = x
// let jumps = 0
// while (together < 200) {
//     together += 10
//     jumps++}

// console.log(jumps)

function frogJmp(x, y, D) { //unable to properly return jumps
    let together = x
    let jumps = 0
    while (together < y) {
        together += y
        jumps++
    }
    return jumps
}
console.log(frogJmp(2, 10, 200))