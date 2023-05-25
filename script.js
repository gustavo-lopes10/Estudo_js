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
//Eventos de input
function submeti(){
    document.getElementById("log").innerHTML += "submeti<br>";
    return false;
  }
  function resetei(){
    document.getElementById("log").innerHTML += "resetei<br>";
  }
  function saiDoCampo(){
    document.getElementById("log").innerHTML += "sai do campo<br>";
  }
  function mudei(){
    document.getElementById("log").innerHTML += "mudei<br>";
  }
  function entreiNoCampo(){
    document.getElementById("log").innerHTML += "entrei no campo<br>";
  }
  function selecionei(){
    document.getElementById("log").innerHTML += "selecionei<br>";
  }
  function teclaBaixo(){
    document.getElementById("log").innerHTML += "tecla para baixo<br>";
  }
  function teclaCima(){
    document.getElementById("log").innerHTML += "tecla para cima<br>";
  }