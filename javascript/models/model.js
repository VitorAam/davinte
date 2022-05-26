class Email{
    constructor(email){
        this.email = email;
    }
    verifyLogin(){
        let user = this.email.substring(0, this.email.indexOf('@'));
        let domain = this.email.substring(this.email.indexOf('@')+1, this.email.length);
        if ((user.length >=1) &&
            (domain.length >= 3) &&
            (user.search("@") ==-1) &&
            (domain.search("@") ==-1) &&
            (user.search(" ") ==-1) &&
            (domain.search(" ") ==-1) &&
            (domain.search(".") != -1) &&
            (domain.indexOf(".") >=1) &&
            (domain.lastIndexOf(".") < domain.length -1)){
                return true 
            } else {
                return false 
            }
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