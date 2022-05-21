class EmailController{
    emailLogin(){
        let emailf = new Email($('#email').val());
        let emailuser = new EmailView();
        emailuser.showEmail(emailf.verifyLogin())
    }
}

let showing = new EmailController();

$('#enter').click(function(event){
    console.log('teste')
    event.preventDefault();
    showing.emailCheck();
})
