/*
Interpretação

1.
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}

2.
a) 
nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

b)Os três pontos indica o spread de um objeto.


3.
a)False
  Undefined

b)return objeto[propriedade] retorna o valor do terceiro item do objeto.
No segundo console.log ele retorna undefined, pois não existe essa propriedade descrita no objeto.

*/

//Escrita
//1.
//a)
const objeto1 = {
    nome: "Eduardo",
    apelidos: ["Du", "Dudu", "Edu"]
}
function imprime()  {
    console.log(`Eu sou o ${objeto1.nome}, mas pode me chamar de ${objeto1.apelidos[0]}, ${objeto1.apelidos[1]} ou ${objeto1.apelidos[2]}.`)
}

imprime(objeto1)
//b)
const objeto2 = {
    ...objeto1, 
    apelidos: ["Godi", "Godiness", "Osiro"]
}

function imprime2() {
    console.log(`Eu sou o ${objeto1.nome}, mas pode me chamar de ${objeto2.apelidos[0]}, ${objeto2.apelidos[1]} ou ${objeto2.apelidos[2]}.`)
}

imprime2(objeto2)


//2.
//a)

const objeto3 = {
    nome2: "Eduardo",
    idade2: 29,
    profissao2: "Estudante",
}

const objeto4 = {
    nome3: "Claudionor",
    idade3: 45,
    profissao3: "Engenheiro",
}

function exercicio2 () {
    return [objeto3.nome2, objeto3.nome2.length, objeto3.idade2, objeto3.profissao2, objeto3.profissao2.length]
}
function exercicio3 () {
    return [objeto4.nome3, objeto4.nome3.length, objeto4.idade3, objeto4.profissao3, objeto4.profissao3.length]
}
console.log(exercicio2(objeto3))
console.log(exercicio3(objeto4))


//3.
//a)
const carrinho = []

//b)
const fruta1 = {
    nome: "Uva",
    disponibilidade: true

}
const fruta2 = {
    nome: "Abacaxi",
    disponibilidade: true
}
const fruta3 = {
    nome: "Kiwi",
    disponibilidade: true
}
//c)
function frutas(objeto ) {
    return carrinho.push(objeto)
}
frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

//d)
console.log(carrinho)



