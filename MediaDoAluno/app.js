const inputNomeDoAluno = document.getElementById('inputNomeDoAluno');
const inputNota1 = document.getElementById('inputNota1');
const inputNota2 = document.getElementById('inputNota2');
const btnMedia = document.getElementById('btnMedia');
const outMedia = document.getElementById('outMedia');
const resultado = document.getElementById('resultado');

function calcularMedia() {
    
    let nomeDoAluno = inputNomeDoAluno.value;
    let nota1 = Number(inputNota1.value);
    let nota2 = Number(inputNota2.value);
    let mediaFinal = ((nota1 + nota2) / 2).toFixed(1);

    if (mediaFinal >= 7) {
        outMedia.textContent = `Médias das Notas: ${mediaFinal}`;
        resultado.textContent = `Parabéns ${nomeDoAluno}, Você foi Aprovado !`;
    } else {
        outMedia.textContent = `Médias das Notas: ${mediaFinal}`;
        resultado.textContent = `${nomeDoAluno}, Você foi Reprovado !`
    }

}

btnMedia.addEventListener('click', calcularMedia);