const inputHorario = document.getElementById('inputHorario');
const btnFuso = document.getElementById('btnFuso');
const outHoraNoFuso = document.getElementById('outHoraNoFuso');

function calcularFuso() {
    
    let horario = Number(inputHorario.value);
    let horaFranca = (horario + 5).toFixed(2); // calcula a hora com o fuso +5;

    if (inputHorario.value == '' || isNaN(horario)) {
        alert('Digite um Horário válido !')
        inputHorario.focus();
        return;
    }

    if (horaFranca > 24) { // se a hora com o fuso for maior que 24
        let horaFrancaFuso = (horaFranca - 24).toFixed(2);
        outHoraNoFuso.textContent = `Na França são ${horaFrancaFuso}`;
    } else {
        outHoraNoFuso.textContent = `Na França são ${horaFranca}`;
    }

}

btnFuso.addEventListener('click', calcularFuso);