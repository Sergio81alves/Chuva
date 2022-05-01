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