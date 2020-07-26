const inputNome = document.getElementById('inputNome');
const inputAltura = document.getElementById('inputAltura');
const inputMasculino = document.getElementById('masculino');
const inputFeminino = document.getElementById('feminino');
const btnCalcular = document.getElementById('btnCalcularPeso');
const btnLimpar = document.getElementById('btnLimpar');
const outResultadoDoPeso = document.getElementById('outResultadoDoPeso');

// Peso ideal do Homem = 22 * altura²
// Peso ideal da Mulher = 21 * altura²

function pesoIdeal() {
    
    let nome = inputNome.value;
    let altura = Number(inputAltura.value);
    let masculino = inputMasculino.checked;
    let feminino = inputFeminino.checked;

    let pesoMasculino = (22 * Math.pow(altura, 2)).toFixed(2);
    let pesoFeminino = (21 * Math.pow(altura, 2)).toFixed(2);

    // checa se o campo do nome ou os inputs estão vazios
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Digite o seu nome e selecione o sexo !');
        inputNome.focus();
        return;
    }
    // checa se a altura é igual a Zero ou se não é um número
    if (altura == 0 || isNaN(altura)) {
        alert('Digite sua Altura !');
        inputAltura.focus();
        return;
    }
    // executa quando tudo estiver ok
    if (masculino) {
        outResultadoDoPeso.textContent = `O seu peso ideal é: ${pesoMasculino} Kgs`;
    } else {
        outResultadoDoPeso.textContent = `O seu peso ideal é: ${pesoFeminino} Kgs`;
    }

}

btnCalcular.addEventListener('click', pesoIdeal);

function limparCampos() {
    inputNome.value = '';
    inputAltura.value = '';
    inputMasculino.checked = false;
    inputFeminino.checked = false;
    outResultadoDoPeso.textContent = '';
    inputNome.focus();
}

btnLimpar.addEventListener('click', limparCampos);