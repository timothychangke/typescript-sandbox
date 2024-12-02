// const person: {
//     // key-type entries
//     name: string;
//     age: number;
// } = {
//   name: 'Timothy',
//   age: 10,
// };
// however, it is better syntax if you let typescript infer the object types

// the object type inferred by typescript if the key-type entries are not defined is
/* 
// const person = {
    name: string;
    age: number;
}
*/

// the other enums will be assigned based on what you specify for each enum
enum Gender {'MALE' = 5, 'FEMALE', 'OTHERS'}

const person: {
  // we have a scenario where the inference is not as you wanted. This is then when you explicitly specify the type. In this case it is the tuple.
//   role: [number, string]; // tuples are data types where the length is fixed and the types are fixed
  // the only exception is that push can add elements into the array
} = {
  name: 'Timothy',
  age: 10,
  // typescript inferred that this is an array of strings. The specific type is string[]
  hobbies: ['Sports', 'Cooking'], // To include other types you could use the any[] type but this would make the idea of typescript useless
  // typescript understand that role is an array with either have number or string in the array
  role: [2, 'author'],
  gender: Gender.MALE
};

console.log(person.nickname);

// for a tuple 
person.role[1] = 10 // the type restriction is enforced here
person.role = [0, 'admin', 'user'] // the length restriction in enforced here
person.role.push('test') // but it not enforced here

for (const hobby of person.hobbies) {
  // typescript's inference can correctly identify that hobby is a string
  console.log(hobby);
  //console.log(hobby.map()) !Error
}
