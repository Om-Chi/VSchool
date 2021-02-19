var employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printemployeeform = function() {
        var nameS = this.name
        var jobTitlE = this.jobTitle
        var salarY = this.salary
        var statuS = this.status 
        //employees.push(nameS, jobTitlE, salarY, statuS)
        console.log(this)
        return this
        }
}

var employee1 = new Employee("Lucy", "Web Developer", "90,000", "Contract")
var employee2 = new Employee("Mavis", "Software Engineer", "125,000", "Full Time")
var employee3 = new Employee("Saphire", "Data Scientist", "119,500", "Full TIme")

employees.push(employee1.printemployeeform())
console.log(employees)

