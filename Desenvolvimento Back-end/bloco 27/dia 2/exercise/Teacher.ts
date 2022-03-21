import Employee from './Employee';
import { ISubject } from './interface';

export default class Teacher extends Employee {

    private _subject: ISubject;

    constructor(name: string, birthDate: Date, salary: number, subject: ISubject) {
        super(name, birthDate, salary);

        this._subject = subject;
        this.enrollment = this.generateEnrollment();
    }

    get subject(): ISubject {
        return this._subject;
    }

    set subject(value: ISubject) {
        this._subject = value;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `PRF${randomStr}`;
    }


}