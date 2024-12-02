// typically stores union types. It can be used to create new types as well
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

// typescript union type will allow the types of number and strings
const combine = (
  input1: Combinable,
  input2: Combinable,
  // this is a literal type. this is a union type of two or more specific values
  resultCovnersion: ConversionDescriptor
) => {
  let result;
  // must split up the handling of the different types. Most of the times this runtime check is necessary
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultCovnersion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 40, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '40', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Tim', 'Chang', 'as-string');
console.log(combinedAges);
