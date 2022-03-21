"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Teacher extends Employee_1.default {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate, salary);
        this._subject = subject;
        this.enrollment = this.generateEnrollment();
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `PRF${randomStr}`;
    }
}
exports.default = Teacher;
