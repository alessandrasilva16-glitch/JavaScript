const homer = document.querySelector(".Homer");
const donut = document.querySelector(".Donuts");

const gameOver = document.querySelector(".game-over");
const reiniciar = document.querySelector(".reiniciar");

const pulosTexto = document.getElementById("pulos");
const tempoTexto = document.getElementById("tempo");

let pulos = 0;
let tempo = 0;
let jogo = true;

setInterval(() => {

    if(!jogo) return;

    tempo++;

    tempoTexto.innerHTML = tempo;

},1000);


function pular(){

    if(!jogo) return;

    if(homer.classList.contains("pulo")) return;

    pulos++;

    pulosTexto.innerHTML = pulos;

    homer.classList.add("pulo");

    setTimeout(()=>{

        homer.classList.remove("pulo");

    },500);

}

document.addEventListener("keydown",pular);
document.addEventListener("touchstart",pular);


const verificar = setInterval(()=>{

    if(!jogo) return;

    const donutPosicao = donut.offsetLeft;

    const homerPosicao = Number(
        window.getComputedStyle(homer)
        .bottom.replace("px","")
    );

    if(

        donutPosicao <= 130 &&
        donutPosicao > 0 &&
        homerPosicao < 80

    ){

        jogo = false;

        donut.style.animation = "none";
        donut.style.left = donutPosicao + "px";

        homer.style.animation = "none";
        homer.style.bottom = homerPosicao + "px";

        gameOver.style.visibility = "visible";

    }

},10);


reiniciar.addEventListener("click",()=>{

    location.reload();

});