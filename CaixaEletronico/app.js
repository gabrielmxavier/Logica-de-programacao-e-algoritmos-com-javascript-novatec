const inputValorDoSaque = document.getElementById('inputValorDoSaque');
const btnSaque = document.getElementById('btnSaque');
const outNotasDe100 = document.getElementById('outNotasDe100');
const outNotasDe50 = document.getElementById('outNotasDe50');
const outNotasDe10 = document.getElementById('outNotasDe10');

function calcularSaque() {
    
    let valorDoSaque = Number(inputValorDoSaque.value);

    // calcula a quantidade de cada nota
    let numeroDeNotas100 = Math.floor(valorDoSaque / 100);
    let restanteDe100 = valorDoSaque % 100;
    let numeroDeNotas50 = Math.floor(restanteDe100 / 50);
    let restanteDe50 = restanteDe100 % 50;
    let numeroDeNotas10 = Math.floor(restanteDe50 / 10);

    if ((inputValorDoSaque.value == 0 || inputValorDoSaque == '') || isNaN(valorDoSaque)) { // valida o valor do input
      alert('Digite o valor á sacar !');
      inputValorDoSaque.focus();
      return;
    } else if (valorDoSaque % 10 !== 0) { // verifica se é multiplo de 10
        alert('Esse caixa só possue notas de R$10, R$50 e R$100 !');
        inputValorDoSaque.value = '';
        inputValorDoSaque.focus();
        return;

    } else { // retorna a quantidade de notas
        outNotasDe100.textContent = `Notas de R$100: ${numeroDeNotas100}`;
        outNotasDe50.textContent = `Notas de R$50: ${numeroDeNotas50}`;
        outNotasDe10.textContent = `Notas de R$10: ${numeroDeNotas10}`; 
    }
    /*
    if (numeroDeNotas100 > 0) {
        outNotasDe100.textContent = `Notas de R$100: ${numeroDeNotas100}`;
    }

    if (numeroDeNotas50 > 0) {
        outNotasDe50.textContent = `Notas de R$50: ${numeroDeNotas50}`;
    }

    if (numeroDeNotas10 > 0) {
        outNotasDe10.textContent = `Notas de R$10: ${numeroDeNotas10}`; 
    }
    */
}

btnSaque.addEventListener('click', calcularSaque);