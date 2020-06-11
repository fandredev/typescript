import $ from 'jquery'
import Livro from './modelo/livro'
const livro = new Livro('Dom quixote', 108.80, 0.10)
$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>R$ ${livro.precoComDesconto()}</h2>`)