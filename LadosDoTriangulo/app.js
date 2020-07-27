// Exerício para verificar a existência de um triângulo
const inputLadoA = document.getElementById('inputLadoA');
const inputLadoB = document.getElementById('inputLadoB');
const inputLadoC = document.getElementById('inputLadoC');
const btnVerificarLados = document.getElementById('btnVerificarLados');
const outVerificado = document.getElementById('outVerificado');
const outTipoDeTriangulo = document.getElementById('outTipoDeTriangulo');

function verificarTriangulo() {
    
    let ladoA = Number(inputLadoA.value);
    let ladoB = Number(inputLadoB.value);
    let ladoC = Number(inputLadoC.value);

    // Verifica se existe algum triângulo
    if ((inputLadoA.value == 0 || inputLadoA.value == '') || (inputLadoB.value == 0 || inputLadoB.value == '') || (inputLadoC.value == 0 || inputLadoC.value == '') || isNaN(ladoA, ladoB, ladoC)) {

        alert('Digite para os lados do Triângulos números válido');
        inputLadoA.value = '';
        inputLadoB.value = '';
        inputLadoC.value = '';
        inputLadoA.focus();
        return;

    } else if ((ladoA > ladoB + ladoC) || (ladoC > ladoB + ladoA) || (ladoB > ladoA + ladoC)) {
        outVerificado.textContent = `Esses Lados não podem formar um triângulo ! Escolha novamente os lados`;
        inputLadoA.value = '';
        inputLadoB.value = '';
        inputLadoC.value = '';
        inputLadoA.focus();
        return;
    }

    // Verifica o tipo de triângulo
    if ( (ladoA == ladoB) && (ladoC == ladoB) ) {

        outVerificado.textContent = `Esses Lados formam um triângulo`;
        outTipoDeTriangulo.textContent = `Tipo de Triângulo: Equilátero`;

    } else {
        if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoC == ladoB)) {

            outVerificado.textContent = `Esses Lados formam um Triângulo`;
            outTipoDeTriangulo.textContent = `Tipo de Triângulo: Isósceles`;

        } else {

            outVerificado.textContent = `Esses Lados formam um triângulo`;
            outTipoDeTriangulo.textContent = `Tipo de Triângulo: Escaleno`;

        }
    }

}

btnVerificarLados.addEventListener('click', verificarTriangulo);