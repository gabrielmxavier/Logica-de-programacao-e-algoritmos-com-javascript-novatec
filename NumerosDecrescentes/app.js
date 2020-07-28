const inputNumero = document.getElementById('inputNumero');
const btnNumeroDecrescente = document.getElementById('btnNumeroDecrescente');
const outNumero = document.getElementById('outNumero');

function mostrarNumeros() {
    
    let numero = Number(inputNumero.value);
    let numerosDecrescentes = '';
    let ultimoNumero = '';

    if (inputNumero.value == '' || isNaN(numero)) {
        alert('Digite um número');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }
    // verifica os números até o 2
    for (let index = numero; index > 1; index--) {
        numerosDecrescentes += `${index}, `;
    }
    // verifica o último número
    for (let index = numero - 1; index > 0 ; index--) {
        ultimoNumero = `${index}`;
    }

    outNumero.textContent = `Entre ${numero} e 1: ${numerosDecrescentes} ${ultimoNumero}.`;
}

btnNumeroDecrescente.addEventListener('click', mostrarNumeros);