function validacionUsuario(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("pas").value;
    if ( username == "ejemplo@gmail.com" && password == "123456"){
        console.log ("Iniciando sesión…");
 
        return false;
    }else{
        alert("favor los campos ingresados no son validos");
    }
}