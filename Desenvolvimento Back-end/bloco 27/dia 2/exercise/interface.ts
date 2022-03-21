export interface IPerson {
  name: string;
  birthDate: Date;
}

export interface ISubject {
  subject: string
}

export interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): void;
}

export interface IEnrollable {
  enrollment: string;
  generateEnrollment(): string;
}