const jogador1 = "X";
const jogador2 = "O";

var startGame = jogador1;
var gameOver = false;

jogadaAtual();
preenchendoCampos();


//colocar essas funções em outro documento
function jogadaAtual(){
    if(gameOver) {
        return;
    }

    if(startGame == jogador1){
        var jogador = document.querySelectorAll("div#placar img")[0]; //pegando o 1º atributo do array
        jogador.setAttribute("src", "img/X.png");
    } else{
        var jogador = document.querySelectorAll("div#placar img")[0];
        jogador.setAttribute("src", "img/0.png");
    }
}

function preenchendoCampos(){ //tenho que pegar todas as div

    var campos = document.getElementsByClassName("tamanho"); // pegando todos os elementos de tamanho, todas as divs
    for ( var i = 0; i < campos.length; i++){
        campos[i].addEventListener("click", function(){
           
            if(gameOver){
                return;
            }

            if(this.getElementsByTagName("img").length == 0){ //se não tiver img dentro da div faça

                if(startGame == jogador1){
                    this.innerHTML = "<img src= 'img/X.png'>"; // inner = escreve no html //lembre eternamente que a merda do html tem que estar em MAIUSCULO
                    this.setAttribute("acao", jogador1);
                    startGame = jogador2; // modificando a vez de quem joga
                } else{
                    this.innerHTML
                    
                    
                    
                    = "<img src= 'img/0.png'>"; // inner = escreve no html
                    this.setAttribute("acao", jogador2);
                    startGame = jogador1;

                }

                jogadaAtual(); // atualizando para jogada
                verVencedor();

            }
        }
    );

    }
        
    }


function verVencedor(){

    var x1 = document.getElementById("x1").getAttribute("acao");
    var x2 = document.getElementById("x2").getAttribute("acao"); //pegue o elemento pelo id
    var x3 = document.getElementById("x3").getAttribute("acao");

    var z1 = document.getElementById("z1").getAttribute("acao");
    var z2 = document.getElementById("z2").getAttribute("acao");
    var z3 = document.getElementById("z3").getAttribute("acao");

    var y1 = document.getElementById("y1").getAttribute("acao");
    var y2 = document.getElementById("y2").getAttribute("acao");
    var y3 = document.getElementById("y3").getAttribute("acao");

    var ganhou = "";

    if ( (x1 == z1 && x1 == y1 && x1 !="") || (x1 == x2 && x1 == x3 && x1 !="") || (x1 == z2 && x1 == y3 && x1 !="") ) {

        ganhou = x1; 
        
    } else if((z2 == z1 && z2 == z3 && z2 != "") || (z2 == x2 && z2 == y2 && z2 != "") || (z2 == x3 && z2 == y1 && z2!="")){
        ganhou = z2;
    } else if((y3 == y3 && y3 == y1 && y2 != "" )|| (y3 == x3 && y3 == z3 && y3 != "" )){
        ganhou = y3;
    }

    if (ganhou != "") {
        gameOver = true;
        alert("O ganhador foi: '" + ganhou + "'" )
    }

}




