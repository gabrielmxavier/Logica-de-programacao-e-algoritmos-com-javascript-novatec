// Verificar se os números estão em ordem crescente.

const inputNumero = document.getElementById('inputNumero');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnVerificar = document.getElementById('btnVerificar');
const outNumeros = document.getElementById('outNumeros');
const outTexto = document.getElementById('outTexto');

let todosNumeros = []

function adicionarNumero() {
    
    let numero = Number(inputNumero.value);

    if (inputNumero.value == '' || todosNumeros.indexOf(numero) >= 0 || isNaN(numero)) {
        alert('Digite um número válido !');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    let listaDeNumeros = '';
    todosNumeros.push(numero);
    let primeiroNumero = todosNumeros[0];

    for (let index = 1; index < todosNumeros.length; index++) {
        listaDeNumeros += `, ${todosNumeros[index]}`
    }

    outNumeros.textContent = `Números: ${primeiroNumero}${listaDeNumeros}`;
    outTexto.textContent = '';
    inputNumero.value = '';
    inputNumero.focus();
    
}

btnAdicionar.addEventListener('click', adicionarNumero);

function verificarOrdem() {
    
    if (todosNumeros.length == 0) {
        alert('Adicione algum número !');
        return;
    }

    for (let index = 0; index < todosNumeros.length -1; index++) {

        if (todosNumeros[index] < todosNumeros[index + 1]) {
            outTexto.textContent = 'Os números estão em ordem crescente.';
        } else {
            outTexto.textContent = 'Atenção... Os números não estão em ordem crescente!';
        }
    }
}

btnVerificar.addEventListener('click', verificarOrdem);