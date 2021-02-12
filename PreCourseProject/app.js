//Create an object and navigate that object using dot notation
//Create an array and navigate that array using bracket notation
//A conditional statement (if, else if, else)
//A for loop OR a while loop
//onclick to call a function 



//Dot Notation
var dogGroom = {
  type: "goldendoodle",
  name: "Perry Winkle",
  furDye: true,
  color: ["orange", "purple", "green"],
  age: 7,
}
console.log(dogGroom.color)
console.log(dogGroom.age)

//Bracket Notation
var flowerArrangements = [
  {
    name: "Larkspur",
    color: "purple",
    availability: false,
    compliments: {
      name: "Rose",
      color: "red",
      availability: true
    }
  },
  {
    name: "Buttercup",
    color: "yellow",
    availability: true,
    compliments: {
      name: "Baby Breath",
      color: "white",
      availability: true
    }
  },
  {
    name: "Amaryllis",
    color: "pink",
    availability: true
  },
  {
    name: "Peony",
    color: "blue",
    availability: false
  }
]
console.log(flowerArrangements[2]["name"])
console.log(flowerArrangements[0]["compliments"]["name"])
//flowerArrangements[3]["name"] = "Petunia"
//??? Can I...['prop']['prop']['subProp']

//If, ElseIf, Else
if(dogGroom.furDye === true) {
  console.log("Apply non toxic dye.")
} else if(dogGroom.furDye === false) {
  console.log("Skip colour")
}else {
  console.log("Have a good day!")
}

//For Loop
var flowers = ["Larkspur", "Prairie Gentian", "Dahlia", "Zinnia", "Wild Carrot", "Dahlia", "Freesia", "Buttercup"]
for (i = 2; i <= flowers.length; i ++)
console.log(flowers[i])



function DrakeAppears() {
  document.getElementById("MemeMe").style.display= 'block';
}
