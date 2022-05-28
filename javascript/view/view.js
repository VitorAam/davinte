class EmailView{
    showEmail(emailValido, tipoEmail){
        //Conferência para email no cadastro
        if (tipoEmail == 'register'){
            if(emailValido == true){

                document.getElementById("email-cliente").style.borderColor = '#4ECA64';
                document.getElementById("error-email").innerHTML = ''
        
            } else {
                document.getElementById("error-email").innerHTML = ' E-mail invalido.'
                document.getElementById("error-email").style.fontSize = '13px'
                document.getElementById("error-email").style.color = '#ff0000'
                document.getElementById("email-cliente").style.borderColor = '#ff0000'
            }
        //Conferência para email no login
        } else if (tipoEmail == 'login'){
            if(emailValido == true){

                document.getElementById("email-cliente-login").style.borderColor = '#4ECA64';
                document.getElementById("error-email-login").innerHTML = ''
        
            } else {
    
                $("#error-email-login").html(' E-mail invalido.')
                document.getElementById("error-email-login").style.fontSize = '13px'
                document.getElementById("error-email-login").style.color = '#ff0000'
                document.getElementById("email-cliente-login").style.borderColor = '#ff0000'
            }
        }
        
    }
}

class CepView{
    showCep(resultado){
        if (resultado.erro == "true"){
            $('#cep-error').html('CEP inválido')
            $('#cep-error').css({'color': '#ff0000', 'font-size':'13px'})
        }else {
            //preenche os campos de endereço com o retorno da api.
            $("#rua-cliente").val(resultado.logradouro);
            $("#cidade-cliente").val(resultado.localidade);
            $("#bairro-cliente").val(resultado.bairro);
            $("#uf-cliente").val(resultado.uf);
            $("#compl-casa-cliente").val(resultado.complemento);
        }
    }
    showErro(){
        $('#cep-error').html('CEP inválido')
        $('#cep-error').css({'color': '#ff0000', 'font-size':'13px'})
    }
}

class SenhaView{
    showSenha(controle){
        if(controle == 'falta'){
            document.getElementById("senha-invalida").innerHTML = 'Senhas precisam ter 8 caracteres ou mais.';
            document.getElementById("senha-invalida").style.fontSize = '13px'
            document.getElementById("senha-invalida").style.color = '#ff0000'

        } else if (controle == 'certo'){
            document.getElementById("senha").style.borderColor = '#4ECA64';
            document.getElementById("conf-senha").style.borderColor = '#4ECA64';
            document.getElementById("senha-invalida").innerHTML = '';

        } else if (controle == 'falsa'){
            document.getElementById("senha").style.borderColor = '#ff0000';
            document.getElementById("conf-senha").style.borderColor = '#ff0000';
            document.getElementById("senha-invalida").innerHTML = 'As senhas precisam ser iguais.';
            document.getElementById("senha-invalida").style.fontSize = '13px'
            document.getElementById("senha-invalida").style.color = '#ff0000'
        }
    }
}