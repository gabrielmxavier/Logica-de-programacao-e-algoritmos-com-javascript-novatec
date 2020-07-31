const inputNumero = document.getElementById('inputNumero');
const btnNumero = document.getElementById('btnNumero');
const outNumero = document.getElementById('outNumero');

function verificarNumero() {
    
    let numero = Number(inputNumero.value);

    let divisores = `Divisores do ${numero} : 1`;
    let soma = 1;

    for (let index = 2; index <= numero / 2; index++) {
        if (numero % index == 0) {
            divisores += `, ${index}`;
            soma += index;
        }
    }
    divisores += `. (Soma: ${soma})`
    outNumero.textContent = divisores;

    if (numero == soma) {
        outNumero.textContent = `${divisores}. Logo, É um número Perfeito`;
    } else {
        outNumero.textContent = `${divisores}. Logo, Não é um número perfeito`;
    }
}

btnNumero.addEventListener('click', verificarNumero);