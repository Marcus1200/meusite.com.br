function enter(){
nome = inputnome
senha = 120347
senha1 = inputsenha
    if(senha1.value == senha) {
     nome1.innerHTML= "Bem vindo: "
     alert("Seu nome de usuario é: "+ nome.value)
     document.write(`<h1>Bem vindo ao bate papo online</h1><h2>${nome.value}</h2>`)

  }
 if(senha1.value != senha){
   nome1.innerHTML= "ERRO, coloque a senha novamente"
 }
}
