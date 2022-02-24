/*
Exercícios de interpretação
1.
{nome: "Amanda Rangel", apelido: "Mandi"}
{nome: "Laís Petra", apelido: "Laura"}
{nome: "Letícia Chijo", apelido: "Chijo}

2.
["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3.
Será impresso tudo, menos os itens que possuam o apelido 'Chijo'.
{nome: 'Amanda Rangel', apelido: 'Mandi'}
{nome: 'Laís Petra', apelido: 'Laura'}
*/
// Exercícios de escrita
// 1.
// a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a)
const nomeDogs = pets.map((item, index, array) => {
    return item.nome
})
console.log(nomeDogs)

//b) 
const arraySalsicha = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})
console.log(arraySalsicha)

//c)
const mensagemParaPoodle = pets.filter((item, index, array) => {
    const racaPoodle = item.raca === "Poodle"
    return racaPoodle
})
const frasePoodle = mensagemParaPoodle.map((item, index, array) => {
    const poodleDesc = `Você ganhou um cuporm de desconto de 10% para tosar o/a ${item.nome}!`
    return poodleDesc
})
console.log(frasePoodle)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
const nomeProduto = produtos.map((item, index, array) => {
    return item.nome
})
console.log(nomeProduto)

//b)
const arrayDesconto = produtos.map((item, index, array) => {
    const listaDesc = {nome: item.nome, preco: (item.preco * 0.95)}
    return listaDesc
}) 
console.log(arrayDesconto)
//c)
const objBebidas = produtos.filter((item, index, array) => {
    const bebidas = item.categoria == "Bebidas"
    return bebidas
})
console.log(objBebidas)
//d)
const arrayYpe = produtos.filter((item, index, array) => {
    const temYpe = item.nome.includes("Ypê")
    return temYpe
})
console.log(arrayYpe)
//e)
const fraseYpe = arrayYpe.map((item, index, array) => {
    const frase = `Compre ${item.nome} por ${item.preco}!`
    return frase
})
console.log(fraseYpe)
// ----------------------------------------------------------------------------------------------------------
//Desafio
//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a)
const pkmnAlfabetica = pokemons.map((item, index, array) => {
    return item.nome
})
const ordenado = pkmnAlfabetica.sort()
console.log(ordenado)

//b)
const tipoPkmn = pokemons.map((item, index, array) => {
    return item.tipo
})
const tipoDuplo = tipoPkmn.filter((item, index, array) => {
    return tipoPkmn.indexOf(item) === index   
})
console.log(tipoDuplo)




























