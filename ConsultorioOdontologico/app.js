const inputPaciente = document.getElementById('inputPaciente');
const btnConsulta = document.getElementById('btnConsulta');
const btnUrgencia = document.getElementById('btnUrgencia');
const btnAtender = document.getElementById('btnAtender');
const pacienteEmAtendimento = document.getElementById('pacienteEmAtendimento');
const outConsulta = document.getElementById('outConsulta');

let todosPacientes = [];

function marcarConsulta() {
    
    let nomePaciente = inputPaciente.value;

    if (nomePaciente == '') {
        alert('Digite seu nome !');
        inputPaciente.focus();
        return;
    }

    todosPacientes.push(nomePaciente);
    let lista = '';

    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
        
    }

    outConsulta.textContent = lista;
    inputPaciente.value = '';
    inputPaciente.focus();

}

btnConsulta.addEventListener('click', marcarConsulta);

function atendimentoPrioritario() {
    
    let nomePaciente = inputPaciente.value;

    if (nomePaciente == '') {
        alert('Digite seu nome !');
        inputPaciente.focus();
        return;
    }

    todosPacientes.unshift(nomePaciente);
    let lista = '';

    for (let index = 0; index < todosPacientes.length; index++) {
        
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
        
    }
    outConsulta.textContent = lista;
    inputPaciente.value = '';
    inputPaciente.focus();

}

btnUrgencia.addEventListener('click', atendimentoPrioritario);

function atenderPaciente() {
    
    if (todosPacientes.length == 0) {
        alert('Não há pacientes para atender !');
        inputPaciente.focus();
        return;
    }

    let atender = todosPacientes.shift();
    pacienteEmAtendimento.textContent = atender;
    let lista = '';

    for (let index = 0; index < todosPacientes.length; index++) {
        lista += `${(index + 1)}. ${todosPacientes[index]}\n`;
        
    }

    outConsulta.textContent = lista;
}

btnAtender.addEventListener('click', atenderPaciente);
