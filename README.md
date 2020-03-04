# Employee-Summary

This app is built with node.js only.

Classes The project have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes are in the tests directory . The first class is an Employee parent class with the following properties and methods:

name id title getName() getId() getEmail() getRole() // Returns 'Employee'

The other three classes will extend Employee. In addition to Employee's properties and methods, Manager also have:

officeNumber

getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern also have:

school

getSchool()

getRole() // Overridden to return 'Intern'

User input The project prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

Roster output The project generates a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

Name

Role

ID

Role-specific property (School, link to GitHub profile, or office number)npm 


TEST
npm run test to see Jest results