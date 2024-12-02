// new shorter function syntax with more variations
const add = (a: number, b: number) => {
  return a + b;
};

// can be simplifed to this where the return is implicit
const addSimplified = (a: number, b: number) => a + b;

// there is another variation for functions that only take one parameter
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector('button');

if (button) {
  // in this case, typescript can infer the type of the event
  button.addEventListener('click', (event) => console.log(event));
}

// you can also set default parameters on functions. Note that the default argument has to be the last parameters in the parameter list
const addDefault = (a: number, b: number = 1) => a + b;
printOutput(addDefault(3));
