console.log('hello');
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const ocNode = document.querySelector(".js-oc");


// состояние
let state = {
    title: ''
}

// изменение состояния
function changeState(newState) {
    state = {...newState};
}

// рендер

function render() {
    ocNode.innerHTML = `<h1> ${state.title} </h1>`;
}


// контроллер
btnNode.addEventListener("click", function() {
    changeState({
        title: inputNode.value
});
    render();

})


