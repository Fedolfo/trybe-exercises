"use strict";
// ./tests/approvedStudents.spec.ts
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
const disciplinesDict = {
    mathematics: 'matemática',
    history: 'história',
};
describe('Testando a função "approvedStudents"', function () {
    describe('quando todas as notas são maiores que 0.7', function () {
        it('retorna "true"', function () {
            const disciplines = [
                { name: disciplinesDict.mathematics, grade: 0.8 },
                { name: disciplinesDict.history, grade: 0.9 },
            ];
            const student = {
                name: "test",
                disciplines: disciplines
            };
            const result = (0, src_1.approvedStudents)(student);
            (0, chai_1.expect)(result).to.be.equal(true);
        });
    });
    describe('quando todas as notas são menores que 0.7', function () {
        it('retorna "false"', function () {
            const disciplines = [
                { name: disciplinesDict.mathematics, grade: 0.1 },
                { name: disciplinesDict.history, grade: 0.2 },
            ];
            const student = {
                name: "test",
                disciplines: disciplines
            };
            const result = (0, src_1.approvedStudents)(student);
            (0, chai_1.expect)(result).to.be.equal(false);
        });
    });
    describe('quando parte das notas são menores que 0.7', function () {
        it('retorna "false"', function () {
            const disciplines = [
                { name: disciplinesDict.mathematics, grade: 0.5 },
                { name: disciplinesDict.history, grade: 0.9 },
            ];
            const student = {
                name: "test",
                disciplines: disciplines
            };
            const result = (0, src_1.approvedStudents)(student);
            (0, chai_1.expect)(result).to.be.equal(false);
        });
    });
});