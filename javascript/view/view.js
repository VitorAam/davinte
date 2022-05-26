class EmailView{
    showEmail(emailValido){
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
}

class CepView{
    showCep(resultado){
        if (resultado.erro == "true"){
            $('#cep-error').html('CEP inválido')
            $('#cep-error').css({'color': '#ff0000', 'font-size':'13px'})
        }else {
            //preenche os campos de endereço com o retono da api.
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