//Eventos de Load
function carregar(){
    document.getElementById("log").innerHTML += "carreguei<br>";
}
function redimensionei(){
    document.getElementById("log").innerHTML += 
    "redimensionei<br>";
}
//Eventos de Clik
function umClique(){
    document.getElementById("imagem").src="imagens/contato.jpg";
    document.getElementById("log").innerHTML = "troca para a foto do computador<br>";
}
function doisCliques(){
    document.getElementById("imagem").src="imagens/multi split.jpg";
    document.getElementById("log").innerHTML = "troca para a foto do ar-condicionado";
}