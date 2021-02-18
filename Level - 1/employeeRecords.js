var employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.jobStatus = function() {
        console.log(this.status)
    }
}
function printemployeeform() {
    
}

var employee1 = new Employee("Lucy", "Web Developer", "90,000", "Contract")
var employee2 = new Employee("Mavis", "Software Engineer", "125,000", "Full Time")
var employee3 = new Employee("Saphire", "Data Scientist", "119,500", "Full TIme")

console.log(employee1)
