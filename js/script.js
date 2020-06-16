// função que pega o valor dos numeros
var numbers = function () {
    console.log("voce chegou aqui");
}
// função que pega o valor das operações
var operations = function () {
    console.log("voce chegou ali");
}

//percorre todos os numeros e aciona o evento quando um e clicado
document.querySelectorAll(".btn-numbers").forEach(item => {
    item.addEventListener("click", numbers);
});

//percorre todos as operações e aciona o evento quando uma e clicado
document.querySelectorAll(".btn-operations").forEach(item => {
    item.addEventListener("click", operations);
});