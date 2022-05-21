class EmailController{
    emailCheck(){
        let emailf = new Email($('.email').val());
        let emailuser = new EmailView();
        emailuser.showEmail(emailf.verifyLogin())
    }
}

let showing = new EmailController();

$('#action').click(function(event){
    event.preventDefault();
    showing.emailCheck();
})
