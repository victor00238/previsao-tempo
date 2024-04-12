/*  Passo 1 - Saber quando o botao for clicado
    Passo 2 - Salvar a informaçao do input
    Passo 3 - Buscar a informacao do input e trazer os dados do servidor
    Passo 4 - Imprimir os dados na tela
*/


const chave = "2e7e9a412ac46b91daf0e22e5a157855" //key para acessar a API


function clicarBotao(){  //Passo 1 - Saber quando o botao for clicado
    const cidade = document.querySelector('.input-local').value;  //Passo 2 - Salvar a informaçao do input
    buscarDados(cidade);
};

//Passo 3 - Buscar a informacao do input e trazer os dados do servidor
async function buscarDados(){
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=londres&appid=2e7e9a412ac46b91daf0e22e5a157855&units=metric').then(resposta => resposta.json());
    console.log(dados.main.temp);
}

    