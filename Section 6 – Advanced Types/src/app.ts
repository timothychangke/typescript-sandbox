export {};
type Combinable = number | string;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

// now typescript does not know whether the result is a string or a number
const result = add(1, 2);
// the result is still of type Combinable and hence number specific functions cannot be performed on the result variable

// typecasting can be used but it is not optimal
// the solution is function overloading
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;

// Implementation
function addOverload(a: Combinable, b: Combinable): Combinable {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString(); // Returns a string
  }
  return a + b; // Returns a number
}

// Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};
// imagine this is fetched from the backend where it is not known whether the atribtes of jobs and titles exist
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing

const userInput = undefined
// in this case, if userInput is null or undefined, the following variable will be saved as 'DEFAULT' fallback valuie
const storedData = userInput ?? 'DEFAULT'
