
// typescript is the layer that does the checks. If all passes, regular vanilla javascript is outputted
var button = document.querySelector("button");
// ! to indicate non-nullity and typecasting 
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// specifying the type of num1 and num2 is number
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
