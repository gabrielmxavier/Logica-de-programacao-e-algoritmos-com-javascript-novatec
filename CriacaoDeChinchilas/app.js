const inputChinchilas = document.getElementById('inputChinchilas');
const inputAno = document.getElementById('inputAno');
const btnChinchilas = document.getElementById('btnChinchilas');
const outChinchilas = document.getElementById('outChinchilas');



function mostarPrevisao() {
    
    let numeroChinchilas = Number(inputChinchilas.value);
    let numeroDeAnos = Number(inputAno.value);

    let total = numeroChinchilas;
    let quantidade = '';

    if (numeroChinchilas < 2 || numeroDeAnos == 0 || isNaN(numeroChinchilas) || isNaN(numeroDeAnos)) {
        alert('Preencha os campos corretamente');
        inputChinchilas.value = '';
        inputAno.value = '';
        inputChinchilas.focus();
        return;
    }

    for (let index = 1; index <= numeroDeAnos; index++) {
        quantidade += `${index}º Ano: ${total} Chinchilas.\n`;
        total *= 3;
        
    }

    outChinchilas.textContent = quantidade;

}

btnChinchilas.addEventListener('click', mostarPrevisao);