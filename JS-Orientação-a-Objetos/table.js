const clientes = [
  {
    nome: "Felipe",
    idade: 22,
    cpf: "121515641",
    email: "asdad@gmail.com",
    fones: ["5598844877"],
    dependentes: [
      {
        nome: "Esther",
        parentesco: "Irmã",
        dataDeNascimento: "19/07/2018",
      },
    ],
  },
  {
    nome: "Andrey",
    idade: 22,
    cpf: "121515641",
    email: "asdad@gmail.com",
    fones: ["559884885", "559884997"],
    dependentes: [
      {
        nome: "Esther",
        parentesco: "Irmã",
        dataDeNascimento: "19/07/2018",
      },
    ],
  },
]

const tabela = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(tabela);
