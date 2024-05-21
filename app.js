function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de>ate){
        alert('O campo "Do número" está com um valor maior do que o campo "Até", por favor verifique!');       
        return;
    }
    if(quantidade> (ate-de+1)){
        alert('O campo quantidade não pode ser maior que o intervalo entre os números!');

        return;
    }

    let numero;
    let sorteados = [];
    for(let i=0; i<quantidade ; i++){
        numero = gerarNumeroAleatorio(de,ate);

        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de,ate);
            alert('tentando obter um número inédito');
        }

        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    habilitarBotaoReiniciar();
    
}

function gerarNumeroAleatorio(min,max){
    return Math.floor(Math.random() *(max-min+1))+min;
}

function reiniciar(){
    limparCampos();    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;    
    desabilitarBotaoReiniciar();
    
}

function habilitarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }    
}

function desabilitarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampos (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

