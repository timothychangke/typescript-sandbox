// for the target parameter of a decorator, if its an instance method its the prototype of the object. If it is a static method it is the constructor function

// this is a decorator to a property
const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property Decorator!');
  // logs the constructor and the name of the property "title"
  console.log(target, propertyName);
};

// this is a setter decorator
const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Access decorator!');
  // logs the constructor
  console.log(target);
  // logs the name of the setter
  console.log(name);
  // logs the setter function itself
  console.log(descriptor);
};

// this is a method decorator. It gets the same arguments as the accessor decorator
const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Method decorator!');
  // logs the constructor
  console.log(target);
  // logs the name of the method
  console.log(name);
  // logs the setter function itself
  console.log(descriptor);
};

// this is a parameter decorator
const Log4 = (target: any, name: string, position: number) => {
  console.log('Paramter decorator!');
  // logs the constructor
  console.log(target);
  // logs the name of the parameter
  console.log(name);
  // logs the setter function itself
  console.log(position);
};

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price – should be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax);
  }
}
