function BTNenviar(){ 
    var Email = document.getElementById("exampleInputEmail1").value;
    var  Senha = document.getElementById("exampleInputPassword1").value;

    if(Email == "" || Senha == "" ){ 
        alert("Um dos campos está vazio!!!");
    }else{ 
        alert("Logado com sucesso!!");
        window.location.href = "index.html";
    }
}