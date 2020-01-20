const BotonLogin = window.document.querySelector('#btnLogin');
BotonLogin.addEventListener('click',login);

function login(){

    const inEmail = window.document.querySelector('#correo');
    const inPassword = window.document.querySelector('#pass');
    const VarEmail = inEmail.value;
    const VarPassword = inPassword.value;

    console.log('Email: '+VarEmail+' Password: '+VarPassword);

    inEmail.value = '';
    inPassword.value = '';
    inEmail.focus();
    inPassword.focus();

    if(VarEmail === 'ejemplo@gmail.com' && VarPassword === '123456'){
       console.log('Iniciando sesión…');
       document.location.assign("../Layout/index.html");
    }
    else{
        console.log('Nombre de usuario y/o contraeña incorrecto');
        document.getElementById('msgError').innerHTML = "Nombre de usuario y/o contraeña incorrecto";
        return false

    }

}