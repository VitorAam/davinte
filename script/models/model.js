class Email{
    constructor(login){
        this.login = login;
    }

    verifyLogin(email){
        let user = email.value.substring(0, email.value.indexOf('@'));
        let domain = email.value.substring(email.value.indexOf('@')+1, email.value.length);
        
    }
}