const names = ['João', 'André', 'Juliana', 'Ana', 'Caio', 'Guilherme']

const notas = [10,4.5,3.5 ,5 ,6]

const reprove = names.filter(( aluno,indice)=> notas[indice] <= 5)
console.log(`reprovados no bimestre ${reprove}`)