//medias 10,6.5,8,7.5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

const notas = [10, 6.5, 8, 75]

//let media = (nota1 + nota2 + nota3 + nota4)/4;

// Push adiciona mais um elemento apos a ultimo campo
notas.push(299)

//length da o tamanho de casa contando com o 0 em diante
console.log(notas)
let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(media)