function validarEmail(){

    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const email = document.getElementById("email-cliente").value;
    
    //função nativa js '.test' retorna valor booleano para strings que atendam ou não a um critério.
    const emailValido = expReg.test(email);

    console.log(email)

   if(emailValido == true){

        document.getElementById("email-cliente").style.borderColor = '#4ECA64';
        document.getElementById("error-email").innerHTML = ''

    } else {

        document.getElementById("error-email").innerHTML = ' E-mail invalido.'
        document.getElementById("error-email").style.fontSize = '13px'
        document.getElementById("error-email").style.color = '#ff0000'
        document.getElementById("email-cliente").style.borderColor = '#ff0000'
    }
}

function validarSenha(){

    const senhaUm = document.getElementById('senha').value;
    const senhaDois = document.getElementById('conf-senha').value;
    const comparaSenha = senhaUm === senhaDois

    if (senhaUm.length < 8 ){

        
        document.getElementById("senha-invalida").innerHTML = 'Senhas precisam ter 8 caracteres ou mais.';
        document.getElementById("senha-invalida").style.fontSize = '13px'
        document.getElementById("senha-invalida").style.color = '#ff0000'

    }else{
        
        if( comparaSenha == true) {

        document.getElementById("senha").style.borderColor = '#4ECA64';
        document.getElementById("conf-senha").style.borderColor = '#4ECA64';

        document.getElementById("senha-invalida").innerHTML = ''

    } else {

        document.getElementById("senha").style.borderColor = '#ff0000';
        document.getElementById("conf-senha").style.borderColor = '#ff0000';

        document.getElementById("senha-invalida").innerHTML = 'As senhas precisam ser iguais.';
        document.getElementById("senha-invalida").style.fontSize = '13px'
        document.getElementById("senha-invalida").style.color = '#ff0000'
    }}
}


