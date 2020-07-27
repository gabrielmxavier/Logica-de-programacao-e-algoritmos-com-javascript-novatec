const inputNumero = document.getElementById('inputNumero');
const btnNumero = document.getElementById('btnNumero');
const outNumero = document.getElementById('outNumero');

// Verifica se o número escolhido é par ou ímpar
function verificarNumero() {
    
    let numero = inputNumero.value;

    if ((numero < 0 || numero == '') || isNaN(numero)) {
        alert('Digite um número positivo válido !');
        inputNumero.value = '';
        inputNumero.focus();
        return;

    } else if (numero % 2 !== 0) {
        outNumero.textContent = `O número ${numero} é Ímpar`;
    } else {
        outNumero.textContent = `O número ${numero} é Par`;
    }

}

btnNumero.addEventListener('click', verificarNumero);