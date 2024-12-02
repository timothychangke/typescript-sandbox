// a generic type is a type that is connect to another type
// an array is a type but it stores strings which is another type
const names: Array<string> = ['Max', 'Tim']; // string[]
// array items can then perform string-related functions

// this promise is of time promise and it is associated to the type of its return value
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('This is done');
  }, 2000);
});

// typescript knows the type the promose will eventually return
promise.then((data) => data.split(' '));

// Generic functions
const merge = (objA: object, objB: object) => {
  return Object.assign(objA, objB);
};

// this would return a merged object, but typescript does not know the properties of this object
const mergedObj = merge({ name: 'Max' }, { age: 30 }); // typecasting is an option, but it is cumbersome
mergedObj.name;

// By using generics, typescript knows that the return object type is the union of the two different types
const mergeGeneric = <T, U>(objA: T, objB: U): T & U => {
  return { ...objA, ...objB };
};
const mergedObj2 = mergeGeneric({ name: 'Max' }, { age: 30 }); // typecasting is an option, but it is cumbersome
mergedObj2.name;

// However, this means that T and U can be of any type and a expression like the one below would work. To make sure that the parameter has to be a type of object, you can make the generic function extend an object
const mergeGenericWithContraints = <T extends object, U extends object>(
  objA: T,
  objB: U
): T & U => {
  return { ...objA, ...objB };
};
// not all generics need contraints, only those that are appropreiate

// another example of generics
interface Lengthy {
  length: number;
}

// the method of extending interfaces is used instead of managing types as its is easier
const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = 'Got no value.';
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
};

const extractAndConvert = (obj: object, key: string) => {
  // typescript does not know whether the object contains the key or not
  return obj[key];
};

// with the generics of T and U, typescript now knows that U is a key of T
const extractAndConvertWithKeyof = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

