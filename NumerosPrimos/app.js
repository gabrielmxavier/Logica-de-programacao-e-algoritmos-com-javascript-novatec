const inputNumero = document.getElementById('inputNumero');
const btnNumero = document.getElementById('btnNumero');
const outNumero = document.getElementById('outNumero');

let numeroDeDivisores = 0;

function verificarNumero() {
    
    let numero = Number(inputNumero.value);

    for (let index = 2; index <= numero / 2; index++) {
        if ((numero % index) == 0) {
            numeroDeDivisores = 1;
            break;
        } 
    }

    if (numero > 1 && !numeroDeDivisores) {
        outNumero.textContent = `Esse número é primo !`
    } else {
        outNumero.textContent = `${numero} não é primo`
    }

}

btnNumero.addEventListener('click', verificarNumero);