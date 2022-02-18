/*
INTERPRETAÇÃO

1)
a. Será impresso 10 e 50 respectivamente.
b. A função ainda funciona, mas no console não irá aparecer nada.

2)
a. A função coleta um texto do usuário, o coloca em letras minúsculas e retorna um boleean true ou false.
b.  i.  true
    ii. true
    iii.true

*/

// ESCRITA
//1)
//a.
const sobreMin = function() {
    console.log('Sou Eduardo, tenho 29 anos, moro em São Paulo e sou estudante')
}
sobreMin()


//b.
function minhaInfo(nome, idade, cidade, estudanteOuNao) {
    const minhaFrase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudanteOuNao}.`
    return minhaFrase
}

console.log(minhaInfo("Eduardo", "29", "São Paulo", "estudante"))

//2)
//a.
function calcular(numero1, numero2){
    const calculo1 = numero1 + numero2
    console.log(calculo1)
}
calcular(2, 5)
//b.
function boolean(numero1, numero2){
   return numero1 >= numero2
}

console.log(boolean(2, 5))
//c.
function parOuNao(a){
    return a % 2 === 0
}
console.log(parOuNao(29848))
//d.
function texto1(texto) {
    console.log(`${texto.lenght}, ${texto.toUpperCase()} `)
}
texto1('Olá, fugi pra lua.')


//3)
function soma(c, d) {
    return c + d
}
function subtracao(c, d) {
    return c - d
}
function multiplicacao(c, d) {
    return c * d
}
function divisao(c, d) {
    return c / d
}
let numeroA = +prompt("Digite um número:")
let numeroB = +prompt("Digite um segundo número:")

console.log(`${numeroA} + ${numeroB} = ${soma(numeroA, numeroB)}`)
console.log(`${numeroA} - ${numeroB} = ${subtracao(numeroA, numeroB)}`)
console.log(`${numeroA} * ${numeroB} = ${multiplicacao(numeroA, numeroB)}`)
console.log(`${numeroA} / ${numeroB} = ${divisao(numeroA, numeroB)}`)


//Desafio
//1)
//a.
let imprima = (texto) => {
    console.log(texto)
}
imprima("Batata Frita")
//b.
let soma1 = (g, h) => {
    imprima(g + h)
}
soma1(15, 26)

//b. ???????????????



