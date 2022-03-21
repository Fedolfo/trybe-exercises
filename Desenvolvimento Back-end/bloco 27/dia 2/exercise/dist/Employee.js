"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(name, birthDate, salary) {
        super(name, birthDate);
        this._enrollment = String();
        this._salary = Number();
        this.salary = salary;
        this._admissionDate = new Date();
        this.enrollment = this.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0)
            throw new Error('O salário não pode ser negativo.');
        this._salary = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de admissão não pode ser uma data no futuro.');
        }
        this._admissionDate = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FUNC${randomStr}`;
    }
}
exports.default = Employee;
