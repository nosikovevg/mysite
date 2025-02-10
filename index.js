console.log('hello');
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const ocNode = document.querySelector(".js-oc");

btnNode.addEventListener("click", function() {
    console.log(inputNode.value);
})


