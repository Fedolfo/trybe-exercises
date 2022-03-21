"use strict";
class PhysicalPerson {
    constructor(name, cpf) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
}
PhysicalPerson.lastId = 0;
class LegalPerson {
    constructor(name, cnpj) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() { console.log(this.id, this._cnpj); }
}
LegalPerson.lastId = 0;
class Contract {
    constructor(broker) {
        this.broker = broker;
    } // T no lugar de Person
    static get number() { return this._number; }
}
Contract._number = 0;
const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');
// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
console.log(c1.broker.cpf); // Okay
// Tipagem explícita
const c2 = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj); // Okay
/*
Saída:
123456789
834729384723
*/
const showIdentification = (person) => {
    person.showIdentification();
};
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
/*
Saída:
 123456789
 987654321
 834729384723
*/ 
