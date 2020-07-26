const inputPrecoPorMin = document.getElementById('inputPrecoPorMin');
const inputTempoDeUso = document.getElementById('inputTempoDeUso');
const btnCalcular = document.getElementById('btnCalcular');
const outResultado = document.getElementById('outResultado');

function calcularPreco() {
    
    let precoPorMinuto = Number(inputPrecoPorMin.value);
    let tempoDeUso = Number(inputTempoDeUso.value);
    let tempoTotalDeUso = Math.ceil(tempoDeUso / 15);

    let precoTotal = (precoPorMinuto * tempoTotalDeUso).toFixed(2);

    outResultado.textContent = `Valor a Pagar: R$ ${precoTotal}`;
}

btnCalcular.addEventListener('click', calcularPreco);