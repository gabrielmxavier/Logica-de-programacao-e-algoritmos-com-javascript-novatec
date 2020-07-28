const inputNumero = document.getElementById('inputNumero');
const btnCalcular = document.getElementById('btnCalcular');
const outTabuada = document.getElementById('outTabuada');

function mostrarTabuada() {
    
    let numero = Number(inputNumero.value);
    let tabuada = '';

    if (inputNumero.value == '' || isNaN(numero)) {
        alert('Digite um número !');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    for (let index = 1; index <= 10; index++) {
        tabuada += `${numero} x ${index} = ${numero * index}\n`;
    }

    outTabuada.textContent = `${tabuada}`;
}

btnCalcular.addEventListener('click', mostrarTabuada);