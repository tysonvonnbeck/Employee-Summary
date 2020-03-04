class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
        this.title="Employee"
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.title
    }

}

const tyson=new Employee("Tyson", 6, "tyson@needsajob.com")
tyson.getName()
tyson.getEmail()

module.exports = Employee

