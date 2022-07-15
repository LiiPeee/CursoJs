const alunos = ['João', 'Diego', 'Arthur', 'Geovane']

const notas = [10,5,8.9,7.5]

let listaDeNotaDeAlunos = [alunos, notas]

const exibeNome = (nomeDoAluno)=> {
    if(listaDeNotaDeAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotaDeAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotaDeAlunos[0][indice] + ', sua média: '+ listaDeNotaDeAlunos[1][indice]
    }else {
        return 'Aluno não está cadastrado'
    }
}
console.log(exibeNome('Arthur'))