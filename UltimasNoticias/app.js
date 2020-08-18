const inputNoticia = document.getElementById('inputNoticia');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListarNoticia = document.getElementById('btnListarNoticia');
const outNumeroDeNoticias = document.getElementById('outNumeroDeNoticias');
const outNoticias = document.getElementById('outNoticias');

let noticias = [];

function adicionarNoticias() {
    
    let noticiaCadastrada = inputNoticia.value;

    if (noticiaCadastrada == '') {
        alert('adicione allguma notícia!');
        inputNoticia.focus();
        return;
    }

    noticias.push(noticiaCadastrada);
    let lista = '';

    for (let index = 0; index < noticias.length; index++) {
        lista = `Número de notícias cadastrada: ${index + 1}`;
    }
    // Alternativa de solução ao inves de utilizar o codigo a partir de let lista = '';
    /*
    
    outNumeroDeNoticias.textContent = noticias.length;
    
    */
    inputNoticia.value = '';
    inputNoticia.focus();

    outNumeroDeNoticias.textContent = lista;
}

btnAdicionar.addEventListener('click', adicionarNoticias);

function listarNoticias() {
    
    let mostrarNoticias = Number(prompt('Quantas noticias você gostaria de ver ?'));
    let totalDeNoticias = noticias.length;

    if ((mostrarNoticias == 0) || isNaN(mostrarNoticias) || mostrarNoticias > totalDeNoticias) {
        alert('Escolha um número menor ou igual ao de notícias cadastradas!');
        return;
    }

    let ultimasNoticias = `${mostrarNoticias} Última(s) notícia(s)\n--------------------- \n`;

    for (let i = totalDeNoticias - 1; i >= totalDeNoticias - mostrarNoticias; i--) {
        ultimasNoticias += `${i + 1}º) ${noticias[i]}\n`;
    }

    outNoticias.textContent = ultimasNoticias;
}

btnListarNoticia.addEventListener('click', listarNoticias);