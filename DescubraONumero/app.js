const inputNumero = document.getElementById('inputNumero');
const btnApostar = document.getElementById('btnApostar');
const btnJogarNovamente = document.getElementById('btnJogarNovamente');
const outErros = document.getElementById('outErros');
const outChances = document.getElementById('outChances');
const outDica = document.getElementById('outDica');

let erros = [];
let numeroGerado = Math.floor(Math.random() * 100) + 1;
const numeroDeChances = 6;

function apostarNumero() {
    
    let numeroApostado = Number(inputNumero.value);

    // checa a validade do número
    if (numeroApostado <= 0 || numeroApostado > 100 || isNaN(numeroApostado)) {
        alert('Digite um número válido');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    // caso a pessoa acerte o número
    if (numeroApostado == numeroGerado) {

        alert('Parabéns você acertou o número !');
        btnApostar.disabled = true;
        btnJogarNovamente.className = 'exibe';
        outDica.textContent = `O número sorteado foi: ${numeroGerado}`;

        // caso não acerte, terá 2 opções: o número de chances acabar ou apostar um número repetido
    } else {

        // verifica se o número é repetido
        if (erros.indexOf(numeroApostado) >= 0) {

            alert(`Voê já apostou o número ${numeroApostado}. Tente outro número...`);

            // atualiza as chances até acabar as chances do jogador
        } else {

            erros.push(numeroApostado);
            let numeroDeErros = erros.length;
            let chancesRestantes = numeroDeChances - numeroDeErros;

            outErros.textContent = `${numeroDeErros} (${erros.join(', ')})`;
            outChances.textContent = chancesRestantes;

            if (chancesRestantes == 0) {

                alert('Suas chances acabaram, reinicie o jogo para tentar novamente !');
                btnApostar.disabled = true;
                btnJogarNovamente.className = 'exibe';
                outDica.textContent = `Game Over !! Número sorteado ${numeroGerado}`;

                // da uma dica se o número é maior ou menor do que o apostado.
            } else {

                let dica = numeroApostado < numeroGerado ? 'Maior' : 'Menor';
                outDica.textContent = `Dica: tente um número ${dica} que o número ${numeroApostado}`;

            }
        }
    }
    inputNumero.value = '';
    inputNumero.focus();
}

btnApostar.addEventListener('click', apostarNumero);

function reiniciarJogo() {
    location.reload();
}

btnJogarNovamente.addEventListener('click', reiniciarJogo);