"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
const disciplinesDict = {
    mathematics: 'matemática',
};
describe('Testando a função "getLetterGrades"', function () {
    describe('quando a nota é maior ou igual a 0.9', function () {
        it('retorna "A"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('A');
        });
    });
    describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', function () {
        it('retorna "B"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.8 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('B');
        });
    });
    describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', function () {
        it('retorna "C"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.7 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('C');
        });
    });
    describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', function () {
        it('retorna "D"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.6 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('D');
        });
    });
    describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', function () {
        it('retorna "E"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.1 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('E');
        });
    });
    describe('quando a nota é menor que 0.1', function () {
        it('retorna "F"', function () {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.05 };
            const { letterGrade, } = (0, src_1.getLetterGrades)(discipline);
            (0, chai_1.expect)(letterGrade).to.be.equals('F');
        });
    });
});
