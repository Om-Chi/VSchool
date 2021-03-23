//Princess Peach has a huge infestation of Goombas, Bob-ombs, and//
//Cheep-cheeps, and has commissioned Mario to take care of her pest problem.//
//Mario did the job, but he is having trouble keep track of how many he//
//has caught and has asked you to build him a website that keeps track of//
//how many baddies he caught for Princess Peach so he can send her a bill.//

//Mario says: "It's a-me, Mario! I can proudly say I have caught this a-many ___, and this a-many ___ Oh yeah! And this a-many ____! Book me!"

//Goomba button
const form1 = document.goomba
var counting= document.getElementById("demo"),
  count = 0;

form1.addEventListener('submit', function(e) {
    e.preventDefault()
    count += 1
    counting.innerHTML = "Click " + count
    //first button: counter, counts caught enemies
    
    //2nd button: capture the value currently caught?
})

const form2 = document.bobomb

form2.addEventListener('submit', function(v) {
    v.preventDefault()
})

const form3 = document.cheep

form3.addEventListener('submit', function(a) {
    a.preventDefault()
})