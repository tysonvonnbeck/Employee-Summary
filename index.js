const inquirer = require("inquirer");
const util = require("util");
const fs = require('fs');
const Manager=require("./lib/Manager")
const Engineer=require("./lib/Engineer")
const Intern=require("./lib/Intern")
let cardsArray=[]
let cardsReady;
const writeFileAsync = util.promisify(fs.writeFile);
function resume (){
  inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add any more team members?",
      name: "addMore",
      choices: [
        "Yes",
        "No"
      ]
    }
  ]).then(function(adding){
if (adding.addMore==="Yes"){
  userInput()
}else{
  console.log("done");
  cardsReady=cardsArray.join("")
  html(cardsReady)

  
}
  })
}
function managerData(answers){
    inquirer.prompt([
        {
          type: "input",
          message: "What is your Office Number?",
          name: "officeNumber"
        },
        


      ]).then(function(office){
          
          const manager=new Manager(answers.name, answers.id,answers.email,office.officeNumber)
          
          cardsArray.push(manager.htmlCards())
          resume()
          

      }).catch(function(err){
        console.log(err);
        
      })

      
}
function engineerData(answers){
    inquirer.prompt([
        {
          type: "input",
          message: "What is your github username?",
          name: "githubUsername"
        }

      ]).then(function(github){
        
        const engineer=new Engineer(answers.name, answers.id,answers.email,github.githubUsername)
        
        cardsArray.push( engineer.htmlCards())
        resume()
        

    }).catch(function(err){
      console.log(err);
      
    })
}
function internData(answers){
    inquirer.prompt([
        {
          type: "input",
          message: "Please provide your School name.",
          name: "school"
        }

      ]).then(function(school){
      
        const intern=new Intern(answers.name, answers.id,answers.email,school.school)
       
        cardsArray.push( intern.htmlCards())
        
        
        
        
        resume()
        

    }).catch(function(err){
      console.log(err);
      
    })
}
function userInput(){
    inquirer.prompt([

        {
          type: "list",
          message: "What's your role?",
          name: "role",
          choices: [
            "Manager",
            "Engineer",
            "Intern"
          ]
        },
        {
          type: "input",
          message: "What is your Name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your Id?",
          name: "id"
        },
        {
          type: "input",
          message: "What is your Email?",
          name: "email"
        }

      ])// add a .then/.catch
      .then(function(mainAnswer){
          if (mainAnswer.role==="Manager"){
              managerData(mainAnswer)
          }
          else if(mainAnswer.role==="Engineer"){
              engineerData(mainAnswer)
          }
          else if ( mainAnswer.role==="Intern"){
              internData(mainAnswer)
          }
          
          

      })
      .catch(function(err){
          console.log(err);
          
      })
      
      
     
}
 function html(){
   const hTml= `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
      <div class="jumbotron">
          <h1 class="display-4 text-center mb-5">My Team</h1>
          <div class= "row d-flex justify-content-around">
             ${cardsReady}
          </div>
        </div>
  
  
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
  </html>
  `
  
    
    
    writeFileAsync("index.html", hTml)

  }
userInput()