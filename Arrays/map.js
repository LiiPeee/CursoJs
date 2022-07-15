const notas = [10, 9 ,7 ,5 ,6]

const notasAtt = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtt)