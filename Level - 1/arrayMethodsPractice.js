var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit)
// console.log("vegetables: ", vegetables)

vegetables.pop()
console.log("vegetables: ", vegetables)

fruit.shift()
console.log("fruit: ", fruit)

console.log(fruit.indexOf("orange"))

fruit.push("1")
console.log("fruit: ", fruit)

console.log(vegetables.length) 

vegetables.push("3")
console.log("vegetables: ", vegetables)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

var joinFood = food.join(" ")
console.log(joinFood)

var splitFood = joinFood.split(" ")
console.log(splitFood)