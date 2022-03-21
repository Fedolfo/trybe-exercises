"use strict";
class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    static addEmployee() {
        this.employeeCount += 1;
    }
    static get employees() {
        return this.employeeCount;
    }
}
Employee.employeeCount = 0;
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
/*
Saída:
0
1
2
*/ 
