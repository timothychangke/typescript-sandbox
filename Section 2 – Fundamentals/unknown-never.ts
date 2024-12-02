// we don't know the type of the userInput
let userInput: unknown;
let userName: string;

// in this case, the unknown type is similar to the any type
userInput = 'Max';
userInput = 5;

// however, unknown types cannot be assigned to variables already with other type definitions. userInput doesn't necessary have to be a string
userName = userInput;
// however if the userInput was any, all type checks will be ignored and the assignment will be valid

// an extra typecheck is needed in order for the assignement to be valid
if (typeof userInput === 'string') {
  userName = userInput;
}

// the script is cancelled the moment the error is thrown so the return type is never. another such example is a function that is an infinite loop
const generateError = (message: string, errorCode: number): never => {
  throw { message, errorCode };
};

generateError('An error occured', 500);
