const inputFilme = document.getElementById('inputFilme');
const inputTempo = document.getElementById('inputTempo');
const btnConverter = document.getElementById('btnConverter');
const outFilme = document.getElementById('outFilme');
const outTempo = document.getElementById('outTempo');

function converterTempo() {
    
    let nomeDoFilme = inputFilme.value;
    let tempoDoFilme = Number(inputTempo.value);

    let horasDeDuração = Math.floor(tempoDoFilme / 60); // retorna a quantidade de horas
    let minutosDeDuração = tempoDoFilme % 60; // resto da divisão

    outFilme.textContent = nomeDoFilme;
    outTempo.textContent = `${horasDeDuração} hora(s) e ${minutosDeDuração} minuto(s)`;
}

btnConverter.addEventListener('click', converterTempo);