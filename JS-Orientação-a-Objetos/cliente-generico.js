function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.email = email;
  this.saldo = saldo;
  this.cpf = cpf;
  this.deposita = function (valor) {
    this.saldo += valor;
  };
}

const Felipe = new Cliente("Felipe", "5656565", "felipe56@gmail.com", 500);

console.log(Felipe);
