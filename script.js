//Distorção do conteúdo
const conteudo = document.querySelector("section");
let atualPos = window.pageYOffset; 

//Função da distorção
const chamaDistorce = function() {
    const novaPos = window.pageYOffset; 
    const difenca = novaPos - atualPos;
    const vel = difenca * 0.35;

    //Inclinação
    conteudo.style.transform = "skewY(" + vel + "deg)";
    atualPos = novaPos

    requestAnimationFrame(chamaDistorce);
};

chamaDistorce();