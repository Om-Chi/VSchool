
//1//
if(5 > 3) {
  console.log("5 is greater than 3")
}
//2//
var a = "Cat"
var b = a.length
if (b === 3) {
  console.log(`${a} is the length of 3`)
}
//3//
if("cat" === "dog") {
console.log("Cat-diggity-Dog")
} else {
console.log(`Not the same.`)
}

//***Bronze Medal***//
var person = {
  name: "Bobby",
  age: 12
}
if(person.age >= 18) {
console.log(`${person.name} is allwed to go to the movies.`)
} else {
console.log(`${person.name} is NOT allowed to go to the movies.`)
}
if (person.name[0] === "B") {
console.log(`${person.name} is allowed in the movies.`)
}
if (person.name[0] === "B" && person.age >= 18) {
console.log(`${person.name} is allowed in the movies.`)
} else {
  console.log(`${person.name} is NOT allowed to go to the movies.`)
}

//**Silver Medal**/
//1//
if(1 === "1") {
console.log("strict")
}else if (1 == "1") {
  console.log("loose")
} else {
  console.log("not equal at all")
}
//2//
if(1 <= 2 && 2 === 4) {
  console.log("yes")
}

//**Gold Medal**//
if (typeof "dog" === "string") {
console.log("Dog is a string")
}

if(typeof "true" === "boolean") {
  console.log("True is a string in this case because it is surrounded by quotations.")
}

if(typeof x === "undefined") {
  console.log("Variable is undefined")
}

if("z" > 3) {
  console.log("Well?")
} else {
  console.log("no")
}

