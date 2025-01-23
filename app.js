let listaDeNumerosSorteados = [];

//Função botão 'sortear'
function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    
    //Verificando se o número mínimo é menor que o máximo
    if(numeroMinimo > numeroMaximo){
        limparCampo('de');
        limparCampo('ate');

        alert('O número mínimo deve ser menor que o número máximo')
    }else if(quantidadeDeNumeros > (numeroMaximo - numeroMinimo)){
        limparCampo('quantidade');

        alert('A quantidade de números a serem sorteados deve ser menor que o intervalo de números para sorteio');
    }

    for(let i = 0; i < quantidadeDeNumeros; i++){
        numAleatorio = parseInt(gerarNumeroAleatorio(numeroMinimo, numeroMaximo));

        if(listaDeNumerosSorteados.includes(numAleatorio)){ //verificando se o numero gerado ja está no array
            numAleatorio = parseInt(gerarNumeroAleatorio(numeroMinimo, numeroMaximo));
            i--;
        }else{
            listaDeNumerosSorteados.push(numAleatorio); //inserindo numero no array
        }
    }

    console.log(listaDeNumerosSorteados);

    //Manipulando HTML para mostrar os números sorteados
    manipularHtml('resultado', `<label class="texto__paragrafo">Números sorteados: ${listaDeNumerosSorteados}</label>`);
    //let resultado = document.getElementById('resultado');
    //resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumerosSorteados}</label>`;

    //Manipulando botão Reiniciar
    manipularBotao('btn-reiniciar', 0);
    //let botaoReiniciar = document.getElementById('btn-reiniciar');
    //botaoReiniciar.classList.remove('container__botao-desabilitado');
    //botaoReiniciar.classList.add('container__botao');
    
    listaDeNumerosSorteados = [];
}

//Função para gerar número aleatório
function gerarNumeroAleatorio(min, max){
   let numeroAleatorio = parseInt(Math.random() * max + min);
   return numeroAleatorio; 
}

//Função para limpar os campos
function limparCampo(id){
    numeros = document.getElementById(id);
    numeros.value = '';
}

//Função para manipular HTML
function manipularHtml(id, texto){
    let v = document.getElementById(id);
    v.innerHTML = texto;
}

//Função para manipular o botão 
function manipularBotao(id, status){
    botao = document.getElementById(id);

    //Se $status for 0 (desativado) ele ativa, se $status for 1 (ativado) ele desativa
    if(status == 0){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else if(status == 1){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Função para reiniciar o jogo
function reiniciar(){
    limparCampo('quantidade');
    limparCampo('de');
    limparCampo('ate');
    listaDeNumerosSorteados = [];

    manipularHtml('resultado', '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>');
    //let resultado = document.getElementById('resultado');
    //resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    manipularBotao('btn-reiniciar', 1);
    //let botaoReiniciar = document.getElementById('btn-reiniciar');
    //botaoReiniciar.classList.remove('container__botao-desabilitado');
    //botaoReiniciar.classList.add('container__botao');
}


