const inputFruta = document.getElementById('inputFruta');
const inputNumero = document.getElementById('inputNumero');
const btnFruta = document.getElementById('btnFruta');
const outFruta = document.getElementById('outFrutas');


function mostrarFruta() {
    
    let fruta = inputFruta.value;
    let numero = Number(inputNumero.value);
    let frutaRepitida = '';
    let ultimaFruta = '';

    if (fruta == '' || numero == 0 || isNaN(numero)) {
        alert('Preencha os campos corretamente...');
        inputFruta.focus();
        inputFruta.value = '';
        inputNumero.value = '';
        outFruta.textContent = '';
        return;
    }

    // Imprimi todas as frutas menos 1
    for (let index = 2; index <= numero; index++) {
        frutaRepitida += `${fruta}*`;
    }

    // imprimi a unica fruta que não foi impressa no loop FOR, uma vez que foi iniciado no index = 2 e não 1
    ultimaFruta = `${fruta}`;

    outFruta.textContent = `${frutaRepitida}${ultimaFruta}`;
}

btnFruta.addEventListener('click', mostrarFruta);