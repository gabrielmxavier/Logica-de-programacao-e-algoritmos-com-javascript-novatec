const inputModeloCarro = document.getElementById('inputModeloCarro');
const inputPreco = document.getElementById('inputPreco');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnFiltar = document.getElementById('btnFiltar');
const outLista = document.getElementById('outLista');

let carros = [];

function adicionarCarro() {
    
    modeloCarro = inputModeloCarro.value;
    precoCarro = Number(inputPreco.value);

    // verifica a validade dos dados
    if (modeloCarro == '' || precoCarro == 0 || isNaN(precoCarro)) {
        alert('Preencha corretamente os dados !');
        inputModeloCarro.value = '';
        inputPreco.value = '';
        inputModeloCarro.focus();
        return;
    }

    // adiciona no array o carro e o preço
    carros.push({ modelo: modeloCarro, preco: precoCarro });

    inputModeloCarro.value = '';
    inputPreco.value = '';
    inputModeloCarro.focus();

    listarCarros();
}

btnAdicionar.addEventListener('click', adicionarCarro);

function listarCarros() {
    
    if (carros.length == 0) {
        alert('Não há carros listado!');
        return;
    }

    let lista = '';

    for (let index = 0; index < carros.length; index++) {
    
        // adiciona os carros á listagem
        lista += `${carros[index].modelo} - R$: ${(carros[index].preco).toFixed(2)}\n`;

    }

    outLista.textContent = lista;
}

btnListar.addEventListener('click', listarCarros);

function filtrarCarros() {
    
    let valorMaximo = Number(prompt('Qual a faixa de preço do carro que procura ?'));

    if (valorMaximo == 0 || isNaN(valorMaximo)) {
        return;
    }

    let lista = '';

    for (let index = 0; index < carros.length; index++) {
        
        // verifica se o preço do carro é menor ou igual ao informado pelo cliente
        if (carros[index].preco <= valorMaximo) {
            lista += `${carros[index].modelo} - R$: ${(carros[index].preco).toFixed(2)}\n`;
        }
        
        if (lista == '') {
            
            outLista.textContent = `Não há carros na faxia de R$: ${(valorMaximo).toFixed(2)}`;

        } else {
            
            outLista.textContent = `Carros com preço até R$: ${valorMaximo.toFixed(2)}\n ------------------ \n${lista}\n`;
        }
    }
}

btnFiltar.addEventListener('click', filtrarCarros);
