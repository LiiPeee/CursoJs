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

  function oferecerSegur0(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes"))
    {
     console.log(`oferta de seguro de Vida${obj.nome}`)
    }
  }

  console.log(obj.values(cliente))
  console.log(obj.entries(cliente))
  oferecerSeguro(cliente)