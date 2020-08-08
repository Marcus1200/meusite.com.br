function enter(){
nome = inputnome
senha = 120347
senha1 = inputsenha
    if(senha1.value == senha) {
     nome1.innerHTML= "Bem vindo: "
     alert("Seu nome de usuario é: "+ nome.value)
     document.write(`<h1>codigo: 01100110 01100101 01101100 01101001 01111010 00100000 01100100 01101001 01100001 00100000 01100100 01101111 01110011 00100000 01110000 01100001 01101001 01110011 </h1><h2>${nome.value}</h2>`)

  }
 if(senha1.value != senha){
   nome1.innerHTML= "ERRO, coloque a senha novamente"
 }
}
