/*
Interpretação
1.
a) O código verifica se um número inserido é par ou não.

b) Números pares.

c) Números ímpares.

2.
a) O código verifica a fruta inserida e retorna o preço dela.

b) O preço da Maçã é R$ 2.25

c) O preço da Pêra é R$ 5 

3.
a) Pede para digitar um número e o transforma em tipo Number.

b) 10 -> Esse número passou no teste
-10 -> Erro

c) Sim, no segundo console.log, a variável mensagem está pedindo o valor de dentro do if, onde sem return, não pode acessao o escopo filho.

*/
//ESCRITAS
//1.
//a)

let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

if(idadeDoUsuario >= 18){
    console.log(`Você pode dirigir!`)
} else {
    console.log(`Você não pode dirigir!`)
}

//2.
const qualPeriodo = prompt("Qual o período? M (matutino), V (Vespertino ou N (Noturno")
function periodo () {
    if(qualPeriodo === "M"){
        console.log("Bom dia!")
    } else if (qualPeriodo === "V"){
        console.log("Boa tarde!")
    } else (qualPeriodo === "N"){
        console.log("Boa noite!")
    }
}

periodo(qualPeriodo)


//3.
const qualPeriodo2 = prompt("Qual o período? M (matutino), V (Vespertino ou N (Noturno")
function periodo2 () {
    switch (qualPeriodo2) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        case "N":
            console.log("Boa noite!")
            break;
    }
}
periodo2(qualPeriodo2)


//4.
const genero = prompt("Qual o genero do filme")
const valorIngresso = Number(prompt("qual o valor do ingresso?"))

if (genero == "fantasia" && valorIngresso < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :( ")
    }
    

//DESAFIO
//1.
const genero = prompt("Qual o genero do filme")
const valorIngresso = Number(prompt("qual o valor do ingresso?"))

if (genero == "fantasia" && valorIngresso < 15) {
        const qualLanche = prompt("Qual lanche você quer comprar?")
        console.log(`Bom filme! Aproveite o seu ${qualLanche}!`)
    }  else {
        console.log("Escolha outro filme :( ")
    }
    

//2.
