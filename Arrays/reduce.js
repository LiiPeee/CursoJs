const salaDePython = [7, 9, 8, 6, 10, 3, 5]

const salaDeJs = [8, 10, 6, 7 , 6, 3]

const salaDeJava = [1, 10, 2, 5 , 6, 3]

function mediaSala(notasDasSalas){
    const somaDasNotas = notasDasSalas.reduce((acumula, atual) =>
    atual + acumula,0)
    return somaDasNotas/notasDasSalas.length
}

console.log(`Media de Javascript ${mediaSala(salaDeJava)}`)
console.log(`Media de Javascript ${mediaSala(salaDeJs)}`)
console.log(`Media de Javascript ${mediaSala(salaDePython)}`)


const notas = [8, 7.5, 4.5, 7 ]

const medias = notas.reduce((a, b) =>
a + b,0)/notas.length

console.log(medias)




