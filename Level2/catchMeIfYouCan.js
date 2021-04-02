// function sum(a, b) {
//     if(a, b !== Number) {
//         throw new Error("Not a number")
//     }
//     return a + b
// }

// try {
//     console.log(sum(1, 2))
// }
// catch(err){
//     console.log(err)
// }
//////////////////////////////////////////////////////////
var user = {username: "sam", password: "123abc"}

function login(username, password) {
    if (username !== password) {
        throw "Hey, do not match."
    } else {
        console.log("login successful!")
    }
}
try {
    console.log(login(user.username, user.password))//Is this the correct argument
} catch(err) {
    console.log(err)
}
