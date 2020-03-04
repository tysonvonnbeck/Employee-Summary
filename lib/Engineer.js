let Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
        this.title="Engineer"
    }

    getGithub(){
        return this.github
    }

    htmlCards(){
        return `<div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <ul class="list-group">
            <li class="list-group-item active">Name : ${this.name}</li>
            <li class="list-group-item">ID : ${this.id}</li>
            <li class="list-group-item">Email : ${this.email}</li>
            <li class="list-group-item">Github : ${this.github}</li>
          </ul>
        </div>
      </div>`
      }

}
module.exports = Engineer