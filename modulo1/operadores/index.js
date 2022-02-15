/*
INTERPRETAÇÃO

1)
a. False

b. False 

c. True

d. Boolean

2)
Os resultados do prompt são em string, portanto (dado primeiro número X e segundo número y) será impresso xy e não a soma dos números.

3)
let primeiroNumero = Number.prompt("Digite um numero!")
let segundoNumero = Number.prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


/*
-------------------------------------------------------------------------------------------------------------------------------------------------
// ESCRITA
//1)
//a.
const idade = Number(prompt("Qual sua idade?"));

//b.
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));

//c.
console.log("Sua idade é maior que a do seu amigo?", idade > idadeAmigo)

//d.
console.log("Diferença de idade:", idade - idadeAmigo)



//2)
//a.
const numeroPar = Number(prompt("Insira um número par"))

//b.
console.log(numeroPar % 2)

//c.
//Todos os pares sempre terão resto zero.

//d.
const numImpar = Number(prompt("Número Ímpar"))
console.log(numImpar % 2)
// Em uma divisão por 2, o resto sempre será 1.



//3)
//a.
const idadeUsuario = Number(prompt("Coloque sua idade"))
const diasParaAniversario = Number(prompt("Quantos dias para seu aniversário"))
const queHorasNasceu = Number(prompt("Que horas você nasceu? - Somente as horas."))
const queHorasSao = Number(prompt("Que horas são agora? Somente as horas."))
console.log(idadeUsuario * 12)
//b. 
let diasDeVida = ((idadeUsuario * 365) + (365 - diasParaAniversario))
console.log(diasDeVida)

//c.
console.log(diasDeVida * 24)


//4)
//a.
const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))
console.log("O primeiro número é maior que o segundo?", numero1 > numero2)

//b.
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)

//c.
let resultadoDivisão1 = Number(numero1 % numero2)
console.log("O primeiro número é divisível pelo segundo?", resultadoDivisão1 === 0)

//d.
let resultadoDivisao2 = Number(numero2 % numero1)
console.log("O segundonúmero é divisível pelo primeiro?", resultadoDivisao2 === 0)


//--------------------------------------------------------------------------------------------------------------------------------------------
// Desafio
//1)

//a.
let KELVIN = 0
let GRAUS_FAHRENHEIT = 77;
console.log(KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15, "F");

//b.
let GRAUS_CELSIUS = 80;
console.log(GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32, "K");

//c.
let GRAUS_CELSIUS1 = 30;
let GRAUS_FAHRENHEIT1 = console.log(GRAUS_FAHRENHEIT = (GRAUS_CELSIUS1)*(9/5) + 32, "F");
console.log(KELVIN = (((GRAUS_CELSIUS1)*(9/5) + 32) - 32)*(5/9) + 273.15)

//d.
let GRAUS_CELSIUS2 = prompt("Graus Celsius")
console.log(KELVIN = (((GRAUS_CELSIUS2)*(9/5) + 32) - 32)*(5/9) + 273.15)


//2)
//a.
let horas1 = Number(prompt("Digite as horas"))
let residencia1 = 280
let totalPago = ( 5 / 100) * residencia1
console.log(totalPago)

//b.
let valorComDesc = totalPago - (totalPago * (15 / 100))
console.log(valorComDesc)

*/

//3)
//a.
let libra20 = 20 * (453592 / 1000000)
console.log(libra20)

//b.
let onca10 = (105 / 10) * (283495 / 10000000)
console.log(onca10)


//c.
let milha100 = 100 * (160934 / 100000)
console.log(milha100)

//d.
let pes50 = 50 * (3048 / 10000)
console.log(pes50)

//e.
let galoes = (10356 / 100) * (378541 / 100000)
console.log(galoes)

//f.
let xicaras = (240 / 1000) * 450
console.log(xicaras)

//g.
let milha = Number(prompt("Quantas milhas")) * (160934 / 100000)
console.log(milha)