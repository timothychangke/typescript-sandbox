const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// spread the array of hobbies. Note that the const array activeHobbies can be mutated as arrays are reference objects
activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30,
};
// this returns a copy of the object and not just the pointer that points to it in memory
const copiedPerson = { ...person };

const addRestParameters = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// a tuple specifying the types can be used if the length of the parameter list is known
const addRestParametersTuple = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// we can destructure an array
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// properties of a person can also be pull out of an object
const { name: username, age } = person;
