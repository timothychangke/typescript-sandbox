// typescript can infer that the type of this element is a HTTPParagraph Element on hover
const paragraph = document.querySelector('p')

// however, in this case, typescript cannot infer that this is a HTTPInput Element
const userInputElement = document.getElementById('user-input')
// this means that when an attribute of HTTPInput is accessed, it would return an error
userInputElement.value = 'test'

// we therefore need to typecase the userInputElement to the user input type
// version 1
const userInputElementWithType1 = <HTMLInputElement>document.getElementById('user-input')

// version 2 (for react so as to not confuse with jsx syntax)
// however you can only do this if you are certain that the element is not null
const userInputElementWithType2 = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement

// this now becomes your responsibility to ensure that the element adheres to the type that you cast to

// Index Properties
interface ErrorContainer {
    // initialise an index type
    // the only thing known is that every object name is a string and its value is a string
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    // this is invalid as we specified that the error value must be a string
    password: 1,
    // this is still valid as a number can be intepreted as a string
    1: "test"
}

