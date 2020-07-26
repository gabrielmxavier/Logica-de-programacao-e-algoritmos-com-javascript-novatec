// 2 vezes o preço do produto mais metado do preço

const inputProduto = document.getElementById('inputProduto');
const inputPrecoDoProduto = document.getElementById('inputPrecoDoProduto');
const btnPreco = document.getElementById('btnPreco');
const outPromocao = document.getElementById('outPromocao');
const outPrecoDoProduto3 = document.getElementById('outPrecoDoProduto3');

function calcularPreco() {
    
    let nomeDoProduto = inputProduto.value;
    let precoDoProduto = Number(inputPrecoDoProduto.value);

    let precoDaPromocao = ((precoDoProduto * 2) + (precoDoProduto * 0.5)).toFixed(2);
    let precoDoProduto3 = (precoDoProduto * 0.5).toFixed(2);

    outPromocao.textContent = `${nomeDoProduto} - Promoção: Leve 3 por: R$ ${precoDaPromocao}`;
    outPrecoDoProduto3.textContent = `O 3º produto sai por: R$ ${precoDoProduto3}`;
}

btnPreco.addEventListener('click', calcularPreco);