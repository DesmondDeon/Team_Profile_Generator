const Engineer = require("../lib/Engineer")

function card (employee){
  var field = ""
    if (employee.getRole() === "Manager") {
        field = `<p class="card-text"> Office Number: ${employee.getOfficeNumber()}</p>`
    }else if(employee.getRole() === "Engineer") {
        field = `<p class="card-text"> Github: ${employee.getGithub()}</p>`
    }
    else{
        field = `<p class="card-text"> School: ${employee.getSchool()}</p>`
    }
    
    return `<div class="col-sm-4">
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <h5 class="card-title">${employee.getRole()}</h5>
            <p class="card-text">ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}" class="card-text">${employee.email}</a></p>
            ${field}
        </div>
    </div>
</div>`
}
module.exports = card