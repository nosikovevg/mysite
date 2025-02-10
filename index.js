console.log('hello');
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const ocNode = document.querySelector(".js-oc");

let title = '';

function changeTitle(newTitle) {
    title = newTitle;
}

function render() {
    ocNode.innerHTML = `<h1> ${title} </h1>`;
}
btnNode.addEventListener("click", function() {
    changeTitle(inputNode.value);
    render();

})


