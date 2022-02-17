/*
  INTERPRETAÇÃO

1)
a. undefined
b. null
c. 11
d. Erro
e. Erro
f. Erro

2)
"SUBI NUM ÔNIBUS EM MIRROCOS", 27

*/
//-------------------------------------------------------------------------------------------------------------------------------------


// ESCRITA
//1)
const nome = prompt("Nome?")
const email = prompt("E-mail?")

console.log(`O email ${email} for cadastrado com sucesso. Seja bem-vindo(a) ${nome}.`)


//2)
//a.
let comidasFav = ['Lasanha', 'Batata Frita', 'Picanha', 'Burrito', 'Sashimi']
console.log("Essas são minhas comidas preferidas:", comidasFav)

//b.
console.log('Essas são minhas comidas preferidas:', comidasFav[0])
console.log('Essas são minhas comidas preferidas:', comidasFav[1])
console.log('Essas são minhas comidas preferidas:', comidasFav[2])
console.log('Essas são minhas comidas preferidas:', comidasFav[3])
console.log('Essas são minhas comidas preferidas:', comidasFav[4])

const comidaFavUsuario = prompt("Qual sua comida favorita?")
let listaNova = comidasFav.fill(comidaFavUsuario, 1, 2)
console.log(listaNova)


//3)

let listaDeTarefas= []

const tarefa1 = prompt("Tarefa 1:")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Tarefa 2:")
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt("Tarefa 3:")
listaDeTarefas.push(tarefa3)
console.log("Lista de TArefas:", listaDeTarefas)

let = tarefaFeita = prompt("Tarefa 0, 1 ou 2 realizada?")
listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Desafio
//1.
let fraseUsuario = prompt("Digite a frase:")
let array1 = [fraseUsuario]
console.log(array1)


//2.
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indexAbacaxi = array.indexOf("Abacaxi")
console.log(indexAbacaxi, array.length)
