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
                return 'Email válido' 
            } else {
                return 'Email inválido' 
            }
    }
}

class Cep{
    constructor(cep){
        this.cep = cep;
    }
    pesquisaCep(){
        return `https://viacep.com.br/ws/${this.cep}/json/`
        try{
            const url = `https://viacep.com.br/ws/${this.cep}/json/`;
            if(this.cep.length == 8){
                $.ajax({url: url,
                    success: (result) => {
                    console.log(result) 
                    if (result.erro == "true"){
                       throw new Error ( 
                            "cpfinvalido"
                        )
                    }else{
                        console.log('teste')
                        const resultado = result
                    }
                }});
            }
        }catch(erro){
            console.log(erro)
        }
    }
}
