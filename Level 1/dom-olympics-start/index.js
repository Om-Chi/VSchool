var head = document.getElementById("header")

var title = document.createElement("h1")
var who = document.createElement("span")
who.classList.add("name")
var wroteThis = document.createElement("span")

title.textContent = "Javascript Made This!!"
head.append(title)

who.textContent = "Omachi"
head.append(who)

wroteThis.textContent = " wrote the Javascript"
head.append(wroteThis)

head.style.textAlign = "center"
head.style.fontWeight = "bold"

//Write some custom JavaScript to automatically change the 
//words of the conversation to something fun and good.

//Write some JavaScript that will wait until the user clicks the 
//"clear" button, and then clears out all conversation. *create id for button element*
var funnies = ["something fun", "something good", "something funnier", "something better"]

var boxmessages = document.getElementsByClassName(".messages")
for (i = 0; i < funnies.length; i++) {
    var newMessage = document.querySelectorAll("div.messages > div")
    newMessage[i].textContent = funnies[i]
}

var textMsg = document.querySelectorAll("div .messages > div")
var color = document.querySelectorAll(".right, .left")

var clear = document.getElementById("clear-button").addEventListener ("click", function() {
    for (i = 0; i < textMsg.length; i++) {
        textMsg[i].textContent = "";
        color[i].style.backgroundColor = "white";
    }
})
//Use the drop down to write some JavaScript that will notice when the drop down has changed 
//and then changes the background colors of the messages accordingly.

//Feel free to edit the HTML <select> id=theme-drop-down tag to make it more usable or elaborate. Mo themes, mo fun.

var right = document.getElementsByClassName("right")
var left = document.getElementsByClassName("left")

var options = document.getElementById("theme-drop-down")
options.innerHTML += "<option value='theme-three'>emerald/tigerlily</option>"
var drops = document.querySelectorAll("option[value]")

//array of color options
var rtColors = ["lightblue", "red", "coral"]
var ltColors = ["burlywood", "black", "violet"]

document.getElementById("theme-drop-down").addEventListener ("change", function() {
    console.log(drops)
    for (i = 0; i < drops.length; i++) {
            right[i].style.backgroundColor = rtColors[i]
            left[i].style.backgroundColor = ltColors[i]
    }
})
//change length to c==length of .message
//different way of selecting colors
