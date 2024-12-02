import axios from axios

const form = document.querySelector('form')!;
const addressInput = <HTMLInputElement>document.getElementById('address')!

const GOOGLE_API_KEY = ''
const searchAddressHandler = (event: Event) => {
    event.preventDefault()
    const enteredAddress = addressInput.value

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`).then((response: any) => console.log(response)).caatch((err: any) => console.log(err))
}
form.addEventListener('submit', searchAddressHandler);
