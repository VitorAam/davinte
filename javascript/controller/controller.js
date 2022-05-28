class EmailController{
    constructor(email, tipo){
        this.emailControl = email;
        this.emailType = tipo;
    }
    emailCheck(){
        let emailf = new Email(this.emailControl);
        let emailuser = new EmailView();
        emailuser.showEmail(emailf.verifyLogin(), this.emailType)
    }
}

class SenhaController{
    testaSenha(){
        let senha = new Senha($('#senha').val())
        let viewSenha = new SenhaView()
        viewSenha.showSenha(senha.confereSenha($('#conf-senha').val()))
    }
}

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

//Pesquisa de CEP
let showingCepRegister = new CepController();

$('#cep').blur(function(){
    $('#cep-error').html('')
    showingCepRegister.cepCheck()
})
//.............................................

//Conferência de senha
const senhaShowValid = new SenhaController()

$('#conf-senha').blur(function(){
    senhaShowValid.testaSenha();
})
//..............................................

//Conferência de Email para a página de cadastro
const showingEmailCadastro = new EmailController($('#email-cliente').val(), 'register');

$('#email-cliente').blur(function(){
    showingEmailCadastro.emailCheck();
})
//...............................................

//Conferência de Email para a página de login
const showingEmailLogin = new EmailController($('#email-cliente-login').val(), 'login');

$('#email-cliente-login').blur(function(){
    showingEmailLogin.emailCheck();
})