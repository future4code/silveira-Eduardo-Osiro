// 1. Será impresso 10 5
// 2. Será impresso 10 10 10 
// 3. Ele pergunta quantas hora trabalho por dia, quanto recebo por dia e impreme o quanto ganho por hora.
// p = horasDeTrabalhoDiario e t = salarioPorDia

//1. a)
nome = 

//1. b)
idade = 

//1. c)
console.log(typeof nome, typeof idade);

//1. d)
// O resultado impresso "undefined" ocorreu, pois não exite um valor atribuído a variável.

//1. e)
nome = console.log (prompt("Qual o seu nome?"));
idade = console.log (prompt("Qual sua idade?"));

//1. f)
console.log(typeof (prompt("qual seu nome?")));
console.log(typeof (prompt("qual sua idade?")));

//1. g)
const seuNome = prompt("Qual seu nome?");
const suaIdade = prompt("Qual sua idade?");
console.log("Olá, ", seuNome, "você tem ", suaIdade, "anos.");


//2.
const roupaAzul = "sim";
const roupaBranca = "não";
const roupaAmarela = "não";

console.log("Você está usando roupa Azul?", roupaAzul);
console.log("Você está usando roupa Branca?", roupaBranca);
console.log("Você está usando roupa Amarela?", roupaAmarela);

//3.
let a = 10;
let b = 25;
let c = 10;
a = b;
b = c;
console.log(a, b);

//Desafio
const numeroA = Number(prompt("Qual o número a?"));
const numeroB = Number(prompt("Qual o número b?"));

console.log(numeroA + numeroB);
console.log(numeroA * numeroB);