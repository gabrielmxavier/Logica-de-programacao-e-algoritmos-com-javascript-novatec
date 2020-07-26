const inputCarro = document.getElementById('inputCarro');
const inputPreco = document.getElementById('inputPreco');
const btnCalcularPreco = document.getElementById('btnCalcularPreco');
const outNomeDoCarro = document.getElementById('outNomeDoCarro');
const outValorDaEntrada = document.getElementById('outValorDaEntrada');
const outValorDasParcelas = document.getElementById('outValorDasParcelas');

function calcularPreco() {
    
    let nomeDoCarro = inputCarro.value;
    let precoDoCarro = Number(inputPreco.value);

    let valorDaEntrada = (precoDoCarro * 0.3).toFixed(2);
    let valorDasParcelas = ((precoDoCarro - valorDaEntrada) / 12).toFixed(2);

    outNomeDoCarro.textContent = nomeDoCarro;
    outValorDaEntrada.textContent = `R$ ${valorDaEntrada}`;
    outValorDasParcelas.textContent = `12 parcelas de: R$ ${valorDasParcelas}`;

}

btnCalcularPreco.addEventListener('click', calcularPreco);