var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(matricula, nome) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasProva = [];
        this._notasTrabalho = [];
    }
    Object.defineProperty(Student.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        set: function (value) {
            this._matricula = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            if (value.length < 6) {
                throw new Error('Por favor, coloque o seu nome completo!');
            }
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "notasProva", {
        get: function () {
            return this._notasProva;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('Só e possivel ter 4 notas de provas!');
            }
            this._notasProva = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "notasTrabalho", {
        get: function () {
            return this._notasTrabalho;
        },
        set: function (value) {
            if (value.length > 2) {
                throw new Error('Só e possivel ter 2 notas de trabalho');
            }
            this._notasTrabalho = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.somaDasNotas = function () {
        return __spreadArray(__spreadArray([], this._notasProva, true), this._notasTrabalho, true).reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
    };
    Student.prototype.mediaDoEstudante = function () {
        var totalNotas = this.somaDasNotas();
        var mediaNotas = this._notasProva.length + this._notasTrabalho.length;
        console.log('Média:', Math.round(totalNotas / mediaNotas));
    };
    return Student;
}());
// [5,6,9,8,6], [5,2]
var student1 = new Student('51818184', 'Filipe');
student1.notasProva = [5, 6, 9, 8];
student1.notasTrabalho = [5, 2];
console.log(student1.matricula, student1.nome, student1.notasProva, student1.notasTrabalho);
console.log('Total:', student1.somaDasNotas());
student1.mediaDoEstudante();
