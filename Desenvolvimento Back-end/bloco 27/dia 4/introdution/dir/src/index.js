"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLetterGrades = exports.setApproved = exports.updateApprovalData = exports.approvedStudents = exports.percentageGradesIntoLetters = void 0;
/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
    numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
    letters: ['A', 'B', 'C', 'D', 'E'],
};
/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
    const gradeNumbers = GRADE_DICT.numbers;
    const gradeLetters = GRADE_DICT.letters;
    for (let i = 0; i < gradeNumbers.length; i += 1) {
        if (gradeNumber >= gradeNumbers[i])
            return gradeLetters[i];
    }
    return 'F';
};
/* Coletar notas */
const getLetterGrades = (discipline) => (Object.assign(Object.assign({}, discipline), { letterGrade: getGradeLetter(discipline.grade) }));
exports.getLetterGrades = getLetterGrades;
/* "Converter" */
const percentageGradesIntoLetters = (student) => (Object.assign(Object.assign({}, student), { disciplines: student.disciplines.map(getLetterGrades) }));
exports.percentageGradesIntoLetters = percentageGradesIntoLetters;
/* "Determinar" */
const approvedStudents = ({ disciplines }) => disciplines.every(({ grade }) => grade > 0.7);
exports.approvedStudents = approvedStudents;
/* "Atualizar" */
const updateApprovalData = (student) => {
    console.log(`A pessoa com nome ${student.name} foi aprovada!`);
    student.disciplines.forEach(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
};
exports.updateApprovalData = updateApprovalData;
function setApproved(students) {
    students
        .map(percentageGradesIntoLetters)
        .filter(approvedStudents)
        .map(updateApprovalData);
}
exports.setApproved = setApproved;
