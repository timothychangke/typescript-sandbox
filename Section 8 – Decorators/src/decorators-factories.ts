// Decorators are used for meta-programming, which helps other developers use your code when you code
// A decorator is a function you apply to a class

// use caps for this decorator. decorator has to have at least one argument
const Logger = (constructor: Function) => {
  console.log('Logging...');
  console.log(constructor);
};

// remember that the decorators is outputed when typescript finds your class and not when the class is instantiated
@Logger
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();
console.log(pers);

// creating a decorators factory
const LoggerFactory = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

// we return a function that returns a function. the advantage is that we can now inject values into the function
@LoggerFactory('LOGGING PERSON2')
class Person2 {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}

// we can also create a decorators factory with a template
const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name
    }
  };
};

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person3 {
  name = 'Max';
  constructor() {
    console.log('Creating person object');
  }
}

// decorators add tooling that is mostly meant for other developers
// decorators are can be stacked on top of each other, but take note that they are executed bottom up. the bottom most decorators executing first

