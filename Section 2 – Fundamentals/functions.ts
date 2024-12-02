const addReturn = (n1: number, n2: number): number => {
  // if not specified, typescript will infer the return type
  return n1 + n2;
};

// the function has a return type of void. This is the default inference of non-returning functionsNote that 'undefined' is a type different from void
const printResultVoid = (num: number): void => {
  console.log('Result: ' + num);
};

// note that 'undefined' is a type different from void. This is used if you return without an actual value. But void works as well
const printResultUndefined = (num: number): undefined | void => {
  console.log('Result: ' + num);
  return;
};

// we get returned undefined
console.log(printResult);

let someValue: undefined;

// you can declare the type of a variable to be a function
let combineValues: Function;
combineValues = addReturn;
console.log(combineValues(8, 8));

// to further restrict which function to set the type to
// now this specifies that combineValues only accepts a function that accepts two numbers as parameters and a return type as a number
let combineValuesStrict: (a: number, b: number) => number;
combineValuesStrict = addReturn;
console.log(combineValuesStrict);

// this restricts the callback function to only one that takes in a number as a parameter but returns void
// however in this case, the void means the return type is ignored and will not be restricted
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

// the result parameter in this case is a number as typescript already knows that result is a number
addAndHandle(10, 20, (result) => {
  console.log(result);
  // because it was void, any return type can be called
  return result
});
