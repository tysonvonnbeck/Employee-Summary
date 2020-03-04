let Employee = require("./Employee")
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        this.title="Intern"
    }

    getSchool(){
        return this.school
    }


    htmlCards(){
        return `<div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <ul class="list-group">
            <li class="list-group-item active">Name : ${this.name}</li>
            <li class="list-group-item">ID : ${this.id}</li>
            <li class="list-group-item">Email : ${this.email}</li>
            <li class="list-group-item">School : ${this.school}</li>
            
          </ul>
          
        </div>
      </div>`
      }

}
module.exports = Intern