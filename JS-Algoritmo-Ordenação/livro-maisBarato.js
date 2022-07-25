const livros = require('./lista-livros'); 


let maisBarato = 0;

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato=atual
    }
}
console.log(`O preço do livro mais Barato ${livros[maisBarato].preco} e o Titulo do Livro e ${livros[maisBarato].nome}`)
