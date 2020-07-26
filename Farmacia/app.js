const inputMedicamento = document.getElementById('inputMedicamento');
const inputPrecoDoMedicamento = document.getElementById('inputPrecoDoMedicamento');
const btnPreco = document.getElementById('btnPreco');
const outNomeDoMedicamento = document.getElementById('outNomeDoMedicamento');
const outPrecoDaPromocao = document.getElementById('outPrecoDaPromocao');

function CalcularPromocao() {
    
    let medicamento = inputMedicamento.value;
    let precoDoMedicamento = Number(Math.floor(inputPrecoDoMedicamento.value) * 2);

    outNomeDoMedicamento.textContent = `Promoção de ${medicamento}`;
    outPrecoDaPromocao.textContent = `Leve 2 pro R$ ${precoDoMedicamento}`;

}

btnPreco.addEventListener('click', CalcularPromocao);