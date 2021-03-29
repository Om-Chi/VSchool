let form = document.form

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let firstName = form.fName.value
    let lastName = form.lName.value
    let age = form.age.value
    let gender = form.gender.value
    const checkedLocations = []
    for(let i = 0; i < form.location.length; i++){
        if(form.location[i].checked) {
            checkedLocations.push(form.location[i].value)
        }
    }
    let diet = form.diet.value
    const checkedDiet = []
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            checkedDiet.push(form.diet[i].value)
        }
    }
    alert(`First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${checkedLocations}
    Diet: ${checkedDiet}`)
})