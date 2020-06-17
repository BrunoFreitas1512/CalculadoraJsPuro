var number1, number2, position, operation, result, text;
position = 0;
text = document.getElementById("text-retorno");
// função que pega o valor dos numeros
function numbers(number) {
    if (number === '=') {
        switch (operation) {
            case 'del':
                console.log("numero deletado")
            break;
            case '/':
                result =  number1 / number2;
                text.innerHTML = `${number1} ${operation} ${number2} = ${result}`;
            break;
            case '*':
                result =  number1 * number2;
                text.innerHTML = `${number1} ${operation} ${number2} = ${result}`;
            break;
            case '-':
                result =  number1 - number2;
                text.innerHTML = `${number1} ${operation} ${number2} = ${result}`;
            break;
            case '+':
                result = Number(number1) + Number(number2);
                text.innerHTML = `${number1} ${operation} ${number2} = ${result}`;
            break;
            default: 
                console.log("ainda não tem uma conta formada");
        }
        position = 2;
    } else if (position === 0) {
        if (number1 === undefined) {
            number1 = number;
        } else {
            number1 += number;
        }
        text.innerHTML = `${number1}`;
    } else if (position === 1) {
        if (number2 === undefined) {
            number2 = number;
        } else {
            number2 += number;
        }
        text.innerHTML = `${number1} ${operation} ${number2}`;
    } else {
        number1 = undefined;
        number2 = undefined;
        position = 0;
        number1 = number;
        text.innerHTML = `${number1}`;
    }
}
// função que pega o valor das operações
function operations (oper) {
    if (number1 !== undefined) {
        if (this.name === 'del') {
            console.log("O DELETE FOI ACIONADO");
        } else {
            operation = oper;
            position = 1;
            text.innerHTML = `${number1} ${operation}`;
            number2 = undefined;
        }
    }   
}

//percorre todos os numeros e aciona o evento quando um e clicado
document.querySelectorAll(".btn-numbers").forEach(item => {
    item.addEventListener("click", function() {
        numbers(this.name);
    });
});

//percorre todos as operações e aciona o evento quando uma e clicado
document.querySelectorAll(".btn-operations").forEach(item => {
    item.addEventListener("click", function() {
        operations(this.name);
    });
});

function tecla(){
    let evt = event.keyCode;
    let value = event.key;
    console.log("O código da tecla pressionada foi: " + evt);
    if ((evt >= 96 && evt <= 105) || (evt >= 48 && evt <= 57)) {
        numbers(value);
    } else if (evt == 106 || evt == 107 || evt == 109 || evt == 111) {
        operations(value);
    }
}
  
document.onkeydown = tecla;