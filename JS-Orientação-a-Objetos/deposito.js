const cliente = {
    nome: "Felipe",
    idade: 22,
    cpf:"121515641",
    email:"asdad@gmail.com",
    fones:["5598844877","559884885","559884997"],
    dependente : [
        {
         nome:"Esther",
         parentesco:"Irmã",
         dataDeNascimento:"19/07/2018"
}
],
saldo:100,
deposita:function(valor){
    this.saldo += valor;
}
}
console.log(cliente.saldo)
cliente.deposita(20)
console.log(cliente.saldo)