// the alternative is:
/* 
if (typeof n1 !== 'number || typeof n2 !== 'number) {
    throw new Error('Incorrect input')
}
*/

// only the typescript compiler understand these type assignements
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
};

// typescript helps in developement but does not change the runtime code
const number1 = 5; // 5.0 and 5 are the same number type
// with a declaration of const, the type is actually 5. With let, it would be of type number. An assignment is not needed here as typescript would infer the type of this variable
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

// javascript is dynamically typed while typescript is statically typed –– where variable typed do to not changed in runtime. This means that error are returned in developement
add(number1, number2, printResult, resultPhrase);
