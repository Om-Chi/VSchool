document.getElementById("add-todo").addEventListener("submit", function (e) {
    e.preventDefault()
    //create new elements
    var momUl = document.getElementById("list")
    var newDiv = document.createElement("div")
    var newLi = document.createElement("li")
    
  
    
    //add user input
    var nextItem = document.getElementById("title").value
    newDiv.textContent = nextItem

    
    
    //create buttons
    var editB = document.createElement("button")
    editB.style.margin = "2px"
    var xButton = document.createElement("button")
    xButton.style.margin = "2px"
    editB.textContent = "edit"
    xButton.textContent = "X"
    var listItem = newLi.append(newDiv, editB, xButton)
    momUl.append(newLi)

function event() {
    var momUl = document.getElementById("list")
    momUl.removeChild(listItem) 
}
xButton.addEventListener("click", event)
})

console.log("Hello")
