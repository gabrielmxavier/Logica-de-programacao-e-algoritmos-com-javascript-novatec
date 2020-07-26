const inputPrecoPorQuilo = document.getElementById('inputPrecoPorQuilo');
const inputPeso = document.getElementById('inputPeso');
const btnPreco = document.getElementById('btnPreco');
const outTotalAPagar = document.getElementById('outTotalAPagar');

function CalcularPreco() {
    
    let preco = Number(inputPrecoPorQuilo.value).toFixed(2);
    let peso = Number(inputPeso.value / 1000);
    let precoTotal = (preco * peso).toFixed(2);

    outTotalAPagar.textContent = `Preço total: R$ ${precoTotal}`;

}

btnPreco.addEventListener('click', CalcularPreco);