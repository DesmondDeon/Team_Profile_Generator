// Create and export Manager 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumeber) {
        super(name, id, email);
        this.officeNumeber = officeNumeber
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.getOfficeNumber
    }
}

module.exports = Manager