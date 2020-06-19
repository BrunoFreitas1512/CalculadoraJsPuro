var number1, number2, position, operation, result, text;
position = 0;
text = document.getElementById("text-retorno");
// função que pega o valor dos numeros
function numbers(number) {
    if (number === '=') {
        if (number1 !== undefined && number2 !== undefined) {
            switch (operation) {
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
                    text.innerHTML = '';
            }
            position = 2;
        }
    } else if (number == 'del') {
        if (position === 0) {
            if (number1 !== undefined) {
                number1 = number1.slice(0, -1);
                text.innerHTML = `${number1}`;
            } 
        } else if (position === 1) {
            if (number2 !== undefined) {
                number2 = number2.slice(0, -1);
                text.innerHTML = `${number1} ${operation} ${number2}`;
            } 
        }
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
    } else if(number === '.') {
        if (position === 0) {
            if (number1 === undefined) {
                number1 = '0.'
            } else {
                number1 += '.'
            }
        } else if (position === 1) {
            if (number2 === undefined) {
                number2 = '0.'
            } else {
                number2 += '.'
            }
        }
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
        operation = oper;
        position = 1;
        text.innerHTML = `${number1} ${operation}`;
        number2 = undefined;
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
        if (this.name == 'del') {
            if (position === 2) {
                text.innerHTML = '';
                operation = undefined;
            } else {
                numbers(this.name);
            }
        } else {
            operations(this.name);
        }
    });
});

function tecla(){
    let evt = event.keyCode;
    let value = event.key;
    if ((evt >= 96 && evt <= 105) || (evt >= 48 && evt <= 57) || value == '=' || evt == 13 || evt == 188 || evt == 110) {
        if (evt == 13) {
            numbers('=');
        } else if (evt == 188 || evt == 110) {
            numbers('.');
        } else if (evt == 56 && value == '*') {
            operations(value);
        } else {
            numbers(value);
        }
    } else if (value == '+' || value == '-' || value == '*' || value == '/') {
        operations(value);
    } else if (evt == 8){
        if (position === 2) {
            text.innerHTML = '';
            operation = undefined;
        } else {
            numbers('del');
        }
    }
}
  
document.onkeydown = tecla;