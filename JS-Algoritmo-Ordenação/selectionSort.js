const livros = require('./lista-livros');
const menorValor = require('./menor-valor');

for(let atual = 0; atual < livros.lengt - 1; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
 

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)