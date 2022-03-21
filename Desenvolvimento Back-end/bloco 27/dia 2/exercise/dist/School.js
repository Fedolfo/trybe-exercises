"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String();
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = this.generateEnrollment();
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    get enrollment() {
        return this._enrollment;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4) {
            throw new Error('Só e possivel ter 4 notas de provas!');
        }
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length > 2) {
            throw new Error('Só e possivel ter 2 notas de trabalho');
        }
        this._worksGrades = value;
    }
    somaDasNotas() {
        return [...this._examsGrades, ...this._worksGrades].reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
    mediaDoEstudante() {
        const totalNotas = this.somaDasNotas();
        const mediaNotas = this._examsGrades.length + this._worksGrades.length;
        console.log('Média:', Math.round(totalNotas / mediaNotas));
    }
}
const student1 = new Student('Filipe', new Date('07/04/2001'));
student1.examsGrades = [5, 6, 9, 8];
student1.worksGrades = [5, 2];
console.log(student1);
console.log(`
  matricula: ${student1.enrollment}
  nome: ${student1.name}
  data de nascimento: ${student1.birthDate}
  notas da prova: ${student1.examsGrades}
  notas do trabalho: ${student1.worksGrades}`);
console.log('Total:', student1.somaDasNotas());
student1.mediaDoEstudante();
