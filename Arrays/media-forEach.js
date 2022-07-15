const notas = [10, 7,5.6,8.5]

let somaDasNotas = 0

notas.forEach(nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)