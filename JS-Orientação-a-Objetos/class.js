class Cliente {
  constructor(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo
  }

  deposita(valor){
    this.saldo +=valor
  }
  exibirSaldo(){
    console.log(this.saldo)
  }
}

const felipe = new Cliente("Felie","45846556", "luiznuubb@gmail.com",300)

felipe.deposita(300)
console.log(felipe)
