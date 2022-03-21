import { IEnrollable } from "./interface";
import { Person } from "./Person";

class Student extends Person implements IEnrollable{
  private _enrollment: string = String();
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._examsGrades = [];
    this._worksGrades = [];
    this._enrollment = this.generateEnrollment()
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
}

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('Só e possivel ter 4 notas de provas!');
    }
    this._examsGrades = value;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('Só e possivel ter 2 notas de trabalho');
    }
    this._worksGrades = value;
  }

  somaDasNotas(): number {
  return [...this._examsGrades, ...this._worksGrades].reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  }

  mediaDoEstudante(): void {
    const totalNotas = this.somaDasNotas();
    const mediaNotas = this._examsGrades.length + this._worksGrades.length
    console.log('Média:', Math.round(totalNotas / mediaNotas));
  }
}
const student1 = new Student('Filipe', new Date('07/04/2001'));
student1.examsGrades = [5,6,9,8];
student1.worksGrades = [5,2];
console.log(student1);
console.log(`
  matricula: ${student1.enrollment}
  nome: ${student1.name}
  data de nascimento: ${student1.birthDate}
  notas da prova: ${student1.examsGrades}
  notas do trabalho: ${student1.worksGrades}`)
console.log('Total:', student1.somaDasNotas());
student1.mediaDoEstudante();