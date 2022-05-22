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
        console.log(cep)
        console.log(cep.pesquisaCep())
        let checked = new CepView()
        checked.showCep(cep.pesquisaCep())
    }
}

let showingCepRegister = new CepController();

$('#cep').blur(function(){
    showingCepRegister.cepCheck()
})