let Employee = require("./Employee")
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber=officeNumber
        this.title="Manager"
    }
    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    htmlCards(){
        return `<div class="card mb-4" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${this.title}</h5>
           <ul class="list-group">
             <li class="list-group-item active">Name : ${this.name}</li>
             <li class="list-group-item">ID : ${this.id}</li>
             <li class="list-group-item">Email : ${this.email}</li>
             <li class="list-group-item">Office# : ${this.officeNumber}</li>
             
           </ul>
           
         </div>
       </div>`
       }
}
module.exports = Manager