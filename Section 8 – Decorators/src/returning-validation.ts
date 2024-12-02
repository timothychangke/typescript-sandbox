// a decorator can also be made to return something

// decorator factory that takes in arguments and returns a decorator function
const WithTemplateReturn = (template: string, hookId: string) => {
  // this ensures the type safety of T where it is a constructor that constructs objects with the name property
  return <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) => {
    // The decorator returns a new class extending the original
    return class extends originalConstructor {
      // the constructor of the new class overrides the original constructor
      constructor(...args: any[]) {
        super(...args); // Call the original constructor
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name; // Use the instance's name property
        }
      }
    };
  };
};

@WithTemplateReturn('<h1>My Person Object</h1>', 'app')
class Person4 {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}

// with this, the function replaces the original constructor function and adds the addition custom DOM logic. However, only access and method decorators have a return value
// for method decorators, their property descriptors can be changed

const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Method decorator!');
  // logs the constructor
  console.log(target);
  // logs the name of the method
  console.log(name);
  // logs the setter function itself
  console.log(descriptor);
};

class Printer {
  message = 'This works!';
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector('button')!;
// without the binding, the p.showMessage method is detached from the Printer instance. It is instead treated as a standalone function and the "this" keyword no longer refers to the instance of Printer
// button.addEventListener('click', p.showMessage);
// so the showMessage function has to be binded to p explicitly
button.addEventListener('click', p.showMessage.bind(p));

const Autobind = (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // this would now overwrite the old descriptor with the new one that includes the bounding function
  return adjDescriptor;
};

// decorators for validation

const Required = (target: any, propName: string) => {};
const PositiveNumber = (target: any, propName: string) => {};
const validate = (obj: Object) => {};
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  // it will be better if the validation was in the class constructor instead of having to validate everytime a class is created
  const createdCourse = new Course(title, price);
});
