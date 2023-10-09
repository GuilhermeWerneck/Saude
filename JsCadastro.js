function BTNenviar() { 
    var Nome = document.getElementById("exampleInputNome1").value; 
    var Email =  document.getElementById("exampleInputEmail1").value; 
    var Senha = document.getElementById("exampleInputPassword1").value; 
    var Rpsenha = document.getElementById("exampleRPPassword").value;
    var small = document.getElementById("AlertSenha");

    if(Senha != Rpsenha) { 
        small.style.display="block";
        small.style.color="red";
    }else{ 
        if(Nome == "" | Email == "" | Senha === "" | Rpsenha === "" ){ 
            alert("Um ou mais campo está vazio!!");
        }else{
        alert("Cadastro foi com sucesso!!");
        }
    }
        

    
        

    
}
   
  