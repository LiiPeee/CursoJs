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
}]

}

cliente.dependente.push({ 
    nome: "Graziela",
    parentesco:"Mãe",
    dataDeNascimento:"19/11/1982"
})

const filhaMaisNova = cliente.dependente.filter(
    dependente => dependente.dataDeNascimento==="19/07/2018"
)
console.log(filhaMaisNova[0].nome)