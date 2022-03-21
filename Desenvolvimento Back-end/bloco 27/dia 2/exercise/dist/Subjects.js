"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjects = void 0;
class subjects {
    constructor(name) {
        this._name = name;
    }
    get nameSubjects() {
        return this._name;
    }
    set namesubjects(value) {
        const three = 3;
        if (value.length < three)
            throw new Error('O nome tem que possuir no mínimo 3 caracteres');
        this._name = value;
    }
}
exports.subjects = subjects;
