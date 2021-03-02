
//**  Lesson 2: Arrays; Rotate items in a an array to teh Right*/
var array = [3, 8, 9, 7, 6] //any array
function rotate(arr, k) {
    if (arr.length > k) { //in case, the length of the array exceeds the number of rotations
        arr.unshift(arr.splice(-k))
    }else {//will iterate the amount of rotations provided until reached
        i = 0
        while(i < k) {
            arr.unshift(arr.splice(-1))
            i++
        }
    }return arr
//this is to rotate to the right, if rotating to the left: replace .unshift() with .pop() and .splice() from the beginning not at -1/-k
}
console.log(rotate(array, 3))