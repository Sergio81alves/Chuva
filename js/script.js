function leiaMais(){
    var pontos = document.getElementById('pontos');
    var maisTexto = document.getElementById('mais');
    
    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none"
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline"
    }
}
function criarPoste(){
    var mostrado = document.getElementById('icons');
    var escondido = document.getElementById('icons2')
   
    if(escondido.style.display == "none"){
       escondido.style.display = "inline"
       mostrado.style.display = "none"
    }else{
        escondido.style.display = "none";
        
    }
}

function negrito(){
    
   var dotr = document.getElementById('mensagem').value  
    dotr = dotr.bold()
}