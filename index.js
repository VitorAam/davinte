
const pesquisaCep = () => {

    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    $.ajax({url: url, success: (result) => {
        
        console.log(result);

        $("#rua-cliente").val(result.logradouro);
        $("#cidade-cliente").val(result.localidade);
        $("#bairro-cliente").val(result.bairro);
        $("#uf-cliente").val(result.uf);
        $("#compl-casa-cliente").val(result.complemento);

    }});
}

document.getElementById('cep').addEventListener('focusout', pesquisaCep);
