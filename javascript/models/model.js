class Email{
    constructor(email){
        this.email = email;
    }
    verifyLogin(){
        const expReg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        try{
            const email = $('#email-cliente').val();
            if(email === undefined){
                throw new Error('Página inválida')
            }
            return expReg.test(email);
        } catch(erro){
            const email = document.querySelector('#email-cliente-login').value
            return expReg.test(email);
        }
        
    
    //função nativa js '.test' retorna valor booleano para strings que atendam ou não a um critério.
        
    }
}

class Cep{
    constructor(cep){
        this.cep = cep;
    }
    pesquisaCep(){
        return `https://viacep.com.br/ws/${this.cep}/json/`
    }
}

class Senha{
    constructor(senha){
        this.senha = senha;
    }
    confereSenha(senhaDois){
        if(this.senha.length < 8){
            return 'falta'
        } else if (this.senha === senhaDois){
            return 'certo'
        } else {
            return 'falsa'
        }
    }
}