class EmailController{
    emailCheck(){
        let emailf = new Email($('.email').val());
        let emailuser = new EmailView();
        emailuser.showEmail(emailf.verifyLogin())
    }
}

let showingEmailLogin = new EmailController();

$('#action').click(function(event){
    event.preventDefault();
    showingEmailLogin.emailCheck();
})

class CepController{
    cepCheck(){
        let cep = new Cep($('#cep').val())
        const url = cep.pesquisaCep()
        let checked = new CepView()
        try{
            if(cep.cep.length == 8){
                $.ajax({url: url,
                    success: (result) => {
                    checked.showCep(result)
                    }
                });
            } else {
                checked.showErro()
            }
        }catch(erro){
            console.log(erro)
        }
    }
}

let showingCepRegister = new CepController();

$('#cep').blur(function(){
    $('#cep-error').html('')
    showingCepRegister.cepCheck()
})