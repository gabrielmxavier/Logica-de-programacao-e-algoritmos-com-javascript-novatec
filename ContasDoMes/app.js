const inputDescricao = document.getElementById('inputDescricao');
const inputValorAPagar = document.getElementById('inputValorAPagar');
const btnPagar = document.getElementById('btnPagar');
const outContas = document.getElementById('outContas');
const outTotal = document.getElementById('outTotal');

// Variáveis globais que contam e somam respectivamente os valores do inputs
let numeroDeContas = 0;
let valorTotal = 0;

// varirável que acumula as contas "as linhas"
let quantidade = '';

function registrarContas() {
    
    let descricao = inputDescricao.value;
    let valorAPagar = Number(inputValorAPagar.value);

    // condicianal que checa se tem algum erro com os inputs
    if (descricao == '' || valorAPagar == 0 || isNaN(valorAPagar)) {
        alert('Informe os dados corretamente...');
        inputDescricao.value = '';
        inputValorAPagar.value = '';
        inputDescricao.focus();
        return;
    }

    // adiciona os valores dos inputs as variáveis globais
    numeroDeContas++;
    valorTotal += valorAPagar;

    // adiciona as linhas com as contas
    quantidade += `${descricao} - R$: ${(valorAPagar).toFixed(2)}\n`;
    // altera o conteúdo nos outputs
    outContas.textContent = `${quantidade}----------------------`;
    outTotal.textContent = `${numeroDeContas} Conta(s) - Total R$: ${(valorTotal).toFixed(2)}`;

    // Limpa os inputs
    inputDescricao.value = '';
    inputValorAPagar.value = '';
    inputDescricao.focus();
}

btnPagar.addEventListener('click', registrarContas);