// an interface describes the structure of an object. The interface keyword is only available in typescript
interface Person {
  // there are only types not the concrete values
  name: string;
  age: number;

  // only the name, parameter type and return type of a method
  greet(phrase: string): void;
}

// the interface can then be used as a typecheck of a particular object
let user1: Person;

// this is a valid user object as it satifies the Person interface
user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + '' + this.name);
  },
};

// but what is the difference with an interface and a type.
// the major difference is that interface is only used to define an object while a type can be used for other types like union, etc
// interface is also clearer and it is also used to ensure that classes adhere to a certain standard
interface Greetable {
  greet(phrase: string): void;
}

interface Named {
  // there are no public and private modifiers in an interface, but it still has a readonly property –– variable cannot be changed after it is initialised. This readonly property will have effects on all classes that implement the interface
  readonly name?: string;
  // you can specify a optional property
  outputName?: string;
}

// the difference between an abstract class and an interface is that an interface has no implementation details at all while an abstract class can have a mixture of implementation and abstraction
// you can have a class implement multiple interfaces or we could have the Greetable interface extend Named
class PersonClass implements Greetable, Named {
    // in this case, the optional interface property of name in Greetable is implemented as non-optional in the PersonClass
  name?: string
  age = 30;
  // it can be optional in the constructor as well, where it will be undefined in the event that no name is specified
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    console.log(phrase)
  }
}

// a recap on function types
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

// you can also create interfaces for function types
interface AddFnInt {
  (a: number, b: number): number;
}

let addInt: AddFn;
add = (n1: string, n2: number) => {
  return n1 + n2;
};

// but a custom type is often used more frequently
