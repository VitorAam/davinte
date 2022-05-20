class Email{
    constructor(login){
        this.login = login;
    }

    verifyLogin(email){
        let user = email.value.substring(0, email.value.indexOf('@'));
        let domain = email.value.substring(email.value.indexOf('@')+1, email.value.length);
        if ((usuario.length >=1) &&
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
