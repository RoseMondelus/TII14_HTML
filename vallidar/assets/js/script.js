// capturar o formulário

const formulário = document.getElementById('formulário');

//campos
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroSenha = document.getElementById('erroSenha');
    

//adicionar evento de envio

formulário.addEventListener('submit', function(event) {

    //impede que recarregue a pagina
    event.preventDefault();

    if(nome.value === ''){
        erroNome.innerText = 'o nome é obrigatório';
    }
     if(email.value === ''){
        erroEmail.innerText = 'o email é obrigatório';
    }
    // else if(!email.value.include('@')){
    //      erroEmail.innerText = 'Digite um e-mail valido'
    //}

     if(senha.value === ''){
        erroSenha.innerText = 'o senha é obrigatório';
    }else if(senha.value.length < 6){
        err .innerText = ' A senha de ter no mínimo 6 caracteres'
    }
    
    



})