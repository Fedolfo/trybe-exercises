class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value
  }

  get nome() {
    return this._nome;
  }

  set nome(value: string) {
    if(value.length < 6) {
      throw new Error('Por favor, coloque o seu nome completo!')
    }
    this._nome = value;
  }

  get notasProva() {
    return this._notasProva;
  }

  set notasProva(value: number[]) {
    if(value.length > 4) {
      throw new Error('Só e possivel ter 4 notas de provas!');
    }
    this._notasProva = value;
  }

  get notasTrabalho() {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if(value.length > 2) {
      throw new Error('Só e possivel ter 2 notas de trabalho');
    }
    this._notasTrabalho = value;
  }

  somaDasNotas(): number {
  return [...this._notasProva, ...this._notasTrabalho].reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  }

  mediaDoEstudante(): void {
    const totalNotas = this.somaDasNotas();
    const mediaNotas = this._notasProva.length + this._notasTrabalho.length
    console.log('Média:', Math.round(totalNotas / mediaNotas));
  }
}
const student1 = new Student('51818184', 'Filipe');
student1.notasProva = [5,6,9,8];
student1.notasTrabalho = [5,2];

console.log(student1.matricula, student1.nome, student1.notasProva, student1.notasTrabalho)
console.log('Total:', student1.somaDasNotas());
student1.mediaDoEstudante();