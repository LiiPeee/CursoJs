const notas = [10,5,6,8]

let somaDasNotas = 0

for(i = 0; i < notas.length ; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)