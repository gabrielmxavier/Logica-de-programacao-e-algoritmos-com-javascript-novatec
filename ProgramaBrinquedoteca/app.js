const inputCrianca = document.getElementById('inputCrianca');
const inputIdade = document.getElementById('inputIdade');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnFiltar = document.getElementById('btnFiltar');
const outLista = document.getElementById('outLista');

let criancas = [];

function adicionarBrinquedo() {
    
    let nome = inputCrianca.value;
    let idade = Number(inputIdade.value);

    if (nome == '' || idade == 0 || idade == '' || isNaN(idade)) {
        alert('Preencha os campos corretamente');
        inputCrianca.value = '';
        inputIdade.value = '';
        inputCrianca.focus();
        return;
    }

    criancas.push({ nome: nome, idade: idade });

    inputCrianca.value = '';
    inputIdade.value = '';
    inputCrianca.focus();

    listarCriancas();
}

btnAdicionar.addEventListener('click', adicionarBrinquedo);

function listarCriancas() {
    
    if (criancas.length == 0) {
        alert('Não há crianças cadastradas!');
        return;
    }

    let lista = '';

    for (let index = 0; index < criancas.length; index++) {
        lista += `${criancas[index].nome} - ${criancas[index].idade} anos \n`;
    }

    outLista.textContent = lista;

}

btnListar.addEventListener('click', listarCriancas);

function resumirIdade() {

    if (criancas.length == 0) {
        alert('Não há crianças na lista !');
        return;
    }
    
    let copia = criancas.slice();

    copia.sort(function (a, b) {
        return a.idade - b.idade
    });

    let resumo = '';

    let menorIdade = copia[0].idade;
    let nomes = [];

    for (let index = 0; index < copia.length; index++) {
        
        if (copia[index].idade == menorIdade) {

            nomes.push(copia[index].nome)

        } else {

            resumo += `${menorIdade} ano(s): ${nomes.length} crianças - `;
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`;
            resumo += `(${nomes.join(', ')}) \n\n`;
            menorIdade = copia[index].idade;
            nomes = [];
            nomes.push(copia[index].nome);

        }
    }
    resumo += `${menorIdade} ano(s) ${nomes.length} crianças - `;
    resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`;
    resumo += `(${nomes.join(', ')}) \n \n`;

    outLista.textContent = resumo;

}

btnFiltar.addEventListener('click', resumirIdade);