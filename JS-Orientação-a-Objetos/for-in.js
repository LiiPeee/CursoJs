const cliente = {
  nome: "Felipe",
  idade: 22,
  cpf: "121515641",
  email: "asdad@gmail.com",
  fones: ["5598844877", "559884885", "559884997"],
  dependente: [
    {
      nome: "Esther",
      parentesco: "Irmã",
      dataDeNascimento: "19/07/2018",
    },
  ],
  saldo: 100,
  deposita: function (valor) {
    this.saldo += valor;
  },
};
let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `${[info]}==> ${cliente[info]}`;
  }
}
console.log(relatorio);
