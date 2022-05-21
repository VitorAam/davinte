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
