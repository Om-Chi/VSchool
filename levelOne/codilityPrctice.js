
// //**  Lesson 2: Arrays; Rotate items in a an array to teh Right*/
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



// function solution(A){
//     let N=[...A];
//     N.sort(function(a, b){return b-a}) /* sorting array in descending order*/
//     for(let i=0;i<N.length;i++){
//     if(N[i]==N[i+1]){
//     N.splice(i,2);
//     i=-1;
//     }
//     if(N[i+1]==undefined){
//     return parseInt(N.join(""))
//     }

//     }}
//     const tests= [[1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], [1,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,9], [1,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9], [1,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9], [1,1,2,2,3,3,4,4,5,5,6,7,7,8,8,9,9],[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9]]

// for (let test of tests){
//    console.log(solution(test))

function solution(A) {
    let N = [...A]
    N.sort(function(a, b) {return b-a})
    while (N.length) {
        if (N[0]==N[1]) {
            N.splice(i,2) 
        }
        if(N[1]==undefined) {
            return parseInt(N.join(""))
        }
    }
}

const nums = [1, 4, 4, 6, 8, 8, 6]
console.log(solution(nums))