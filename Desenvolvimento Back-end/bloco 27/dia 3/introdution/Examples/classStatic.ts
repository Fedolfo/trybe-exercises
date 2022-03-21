class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);

/*
Saída:
0
1
2
*/