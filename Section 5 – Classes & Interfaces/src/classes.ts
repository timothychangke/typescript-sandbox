// The concept of OOP is different objects working together in code
// Classes are the blueprints in which you create these objects and define their properties and methods. Objects then become instances of these classes

abstract class Department {
  static fiscalYear = 2024;
  // define the name of the key and the key-value type
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];
  // we could declare properties directly in the parameter of the constructor function. The readonly attribute makes a property not changeable to improve type safety

  // id is protected so that it can be accessed in inherited classes
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  // static methods can be called without the need to instaniate the class and just by referencing the class namespace
  static createEmployee(name: string) {
    return { name: name };
  }

  describe() {
    console.log('Department: ' + this.name);
  }

  // in order to force others to implement an method whenever they inherit from a base class, you mark it as abstract. the base class containing this abstract method must be marked as abstract as well
  abstract describeAbstract(this: Department): void;

  // adding a type restriction on the this keyword means the function can only be called on an instance of the Department class
  correctDescribe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// an abstruct class now cannot be instantiated and is only meant to be inherited from
const accounting = new Department('d1', 'Accounting');
accounting.describe();
const accountingCopy = {
  describe: accounting.describe,
  correctDescribe: accounting.correctDescribe,
};
// in this case, the output will be undefined. This is because though the describe function is called properly, the this keyword in the describe function is referring to the accountingcopy object which has no name property
accountingCopy.describe();
// this will have an error
accountingCopy.correctDescribe();

const finance = new Department('f1', 'Finance');
finance.addEmployee('Max');
finance.addEmployee('Steve');

// we could modify the object by directly modifying its properties before employee was a private variable. this is not ideal.
finance.employees[2] = 'Anna';

finance.describe();
finance.printEmployeeInformation();

// the class that inherits from the base class inherits everything of the base class, even the constru
class ITDepartment extends Department {
  // property automatically is created using the constuctuor shortcut
  constructor(id: string, public admins: string[]) {
    // super has to be called first before super
    super(id, 'IT');
    this.admins = admins;
  }

  // because the describeAbstract method in the base class of Department is abstract, the method must be added in all the classes that inherit from it
  describeAbstract() {
    console.log('IT Department');
  }
}

const it = new ITDepartment('a1', ['Malcom']);

class AccountingDepartment extends Department {
  private lastReport: string;
  // a getter method is used get private values in the class
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  // this overwrites the previous describe function in the base Department class
  describe() {
    console.log('Accounting Department –– ID: ' + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') {
      return;
    }
    // private properties are only accessible in the class in which they are defined
    // in order to make it available to the other classes that extends the base class, the access method should be set to protected
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
}

class SpecialDepartment extends Department {
  // store a private static instance of the class itself
  private static instance: SpecialDepartment;
  private constructor(id: string) {
    super(id, 'Special Department');
  }
  describeAbstract() {
    console.log('Special Departemnt: ' + this.id);
  }
  static getInstance() {
    // the this in the static method refers to the class and not the instance of the class
    if (this.instance) {
      return this.instance;
    } else {
      // as we are now inside of a class method, we can access the priveate constructor
      this.instance = new specialDepartment('t1');
      return this.instance
    }
  }
}

const accountingNew = new AccountingDepartment('b2', []);
accountingNew.addReport('Something went wrong...');
accountingNew.addEmployee('Max');
accountingNew.addEmployee('Tommy');

// getters and setters are accessed as properties and not methods
accountingNew.mostRecentReport = 'This is the most recent report';
console.log(accountingNew.mostRecentReport);

// example of accessing static methods and properties
const employee1 = Department.createEmployee('Tom');
console.log(employee1, Department.fiscalYear);
// do note that only static methods and properties can be access in static functions. They are detached from instances and are only attached to the class names

// the singleton pattern is the restriction that there is only one instance of a particular class. This is done with private constructors
const special = SpecialDepartment.getInstance();
