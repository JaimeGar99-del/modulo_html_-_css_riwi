// const num1 = document.getElementById('n1');
// const operador = document.getElementById('op');
// const num2 = document.getElementById('n2');
// const resultado = document.getElementById('res');

//     function calcular(){
//         const v1 = num1.value;
//         const v2 = num2.value;
//         const signo = operador.value.trim();

//         if (isNaN(v1) || isNaN(v2)) return;
//         let total = 0;
//         if(signo != '') {
//             if (signo == '+'){
//                 total = v1 + v2;
//             } 
//             else if(signo == '-'){
//                 total = v1 - v2;
//             }
//             else if(signo == '*'){
//                 total = v1 * v2;
//             }
//             else if(signo == '/'){
//                 total = v1 / v2;
//             }
//             else{
//                 total = "???";
//             } 
//         }
//         resultado.innerText = total;
//     };
//     num1.addEventListener('input', calcular);
//     operador.addEventListener('input', calcular);
//     num2.addEventListener('input', calcular);


const num1 = document.getElementById('sec-n1');
const operador = document.getElementById('sec-op');
const num2 = document.getElementById('sec-n2');
const resultado = document.getElementById('res');

let fase = 1;

function calcular() {
    const v1 = parseFloat(num1.innerText);
    const v2 = parseFloat(num2.innerText);
    const signo = operador.innerText.trim();

    if (isNaN(v1) || isNaN(v2)) return;

    let total = 0;

    if (signo != '') {
        if (signo == '+') {
            total = v1 + v2;
        } 
        else if (signo == '-') {
            total = v1 - v2;
        }
        else if (signo == '*') {
            total = v1 * v2;
        }
        else if (signo == '/') {
            total = v2 !== 0 ? v1 / v2 : "Error";
        }
        else {
            total = "???";
        } 
    }
    resultado.innerText = total;
}

function addNum(num) {
    if (fase === 1) {
        if (num === '.' && num1.innerText.includes('.')) return;
        num1.innerText += num;
    } else {
        if (num === '.' && num2.innerText.includes('.')) return;
        num2.innerText += num
    }

}


function setOp(op) {
    if (num1.innerText === "") return; 
    operador.innerText = op;
    fase = 2; 
}
function ejecutar() {
    calcular();
}

function limpiar() {
    num1.innerText = "";
    num2.innerText = "";
    operador.innerText = "";
    resultado.innerText = "0";
    fase = 1;
}

function borrar() {
    if (fase === 1) {
        num1.innerText = num1.innerText.slice(0, -1);
    } else {
        if (num2.innerText === "") {
            fase = 1;
            operador.innerText = "";
        } else {
            num2.innerText = num2.innerText.slice(0, -1);
        }
    }
}
