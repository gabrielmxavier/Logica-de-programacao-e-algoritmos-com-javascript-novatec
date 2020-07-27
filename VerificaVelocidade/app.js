// Checa se a velocidade do condutor estava com mais de 20% de excesso de velocidade ou menos de 20%, e diz se recebe multa ou não, caso receba se é grave ou leve.

const inputVelocidadePermitida = document.getElementById('inputVelocidadePermitida');
const inputVelocidadeDoVeiculo = document.getElementById('inputVelocidadeDoVeiculo');
const btnVelocidade = document.getElementById('btnVelocidade');
const outSituacao = document.getElementById('outSituacao');

function verificarVelocidade() {

    let velocidadePermitida = Number(inputVelocidadePermitida.value);
    let velocidadeDoVeiculo = Number(inputVelocidadeDoVeiculo.value);

    let velocidadeAcimaDoPermitido = (velocidadeDoVeiculo - velocidadePermitida);
    let vintePorCentoDoPermitido = (velocidadePermitida * 0.2);

    if ((inputVelocidadeDoVeiculo.value == '' || inputVelocidadePermitida.value == '') || (isNaN(velocidadePermitida) || isNaN(velocidadeDoVeiculo))) {
        alert('Digite uma velocidade válida !');
        inputVelocidadeDoVeiculo.value ='';
        inputVelocidadePermitida.value = '';
        inputVelocidadePermitida.focus();
        return;
    }

    // se a velocidade for menor que o limite não paga multa
    if (velocidadeDoVeiculo < velocidadePermitida) { 
        outSituacao.textContent = `Velocidade dentro do permitido. Sem multa !`;
    } else if (velocidadeAcimaDoPermitido >= vintePorCentoDoPermitido) { 

        // se a velocidade for maior que 20% recebe multa grave
        outSituacao.textContent = `Você estava com a velocidade 20% acima do permitido. Multa Grave !`;
    } else {

        // se a velocidade excedida for menor que 20% recebe, multa leve
        outSituacao.textContent = `Você estava com menos de 20% de velocidade acima do permitido. Multa Leve !`
    }

}

btnVelocidade.addEventListener('click', verificarVelocidade);