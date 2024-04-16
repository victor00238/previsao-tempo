/*  Passo 1 - Saber quando o botao for clicado
    Passo 2 - Salvar a informaçao do input
    Passo 3 - Buscar a informacao do input e trazer os dados do servidor
    Passo 4 - Oranizar o dados que vem do servidor
    Passo 5 - Imprimir os dados na tela
*/


const chave = "2e7e9a412ac46b91daf0e22e5a157855" //key para acessar a API

function clicarBotao(){  //Passo 1 - Saber quando o botao for clicado
    const cidade = document.querySelector('.input-local').value;  //Passo 2 - Salvar a informaçao do input

    buscarDados(cidade);
};

//Passo 3 - Buscar a informacao do input e trazer os dados do servidor
async function buscarDados(cidade){
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=2e7e9a412ac46b91daf0e22e5a157855&units=metric').then(resposta => resposta.json());

    imprimirDados(dados);
    console.log();

}

function imprimirDados(dados){ //Passo 5 - Imprimir os dados na tela
    //Passo 4 - Oranizar o dados que vem do servidor
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name; 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}


/* inner.HTML = pega o valor do elemento
    math.floor = ferramenta para arredondamento de valores
*/



    