// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//  for (var i = 0; i < officeItems.length; i++) {
//      if (officeItems[i] === "computer") {
//          console.log(officeItems[i])
//      }
//  }


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 
//first and last objects repeat themselves
// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. SHE may not come in." )
//     }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. HE may not come in." )
//     }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[[i].gender === "female"]) {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let HER in")
//     }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[[i].gender === "male"])
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let Him in.")
//     }else {
//         console.log()
//     }
//Preliminaries
// for (i = 0; i <=9; i++) {
//     console.log(i)
// }
// for (i = 9; i >= 0; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

//Bronze - ???? unable to print 0 and Why is it printing 10 comapred to my data in the first preliminaries practice???
// var numArray = []
// for (i = 0; i <= 9; i++) {
//     console.log(numArray.push(i))     
// }
// for (i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(i = 0; i < fruit.length; i++) {
//     if([i] % 2 === 0) {
//         console.log(fruit[i])
//     }
// }

//Silver
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
 for(i = 0; i < peopleArray.length; i++) {
   console.log(peopleArray[i].name)
 }