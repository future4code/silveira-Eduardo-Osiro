/*
INTERPRETAÇÃO
1. O códigomeça pelo valor = 0 e passará por mais 5 loops, do i = 0 ao i =4. Somando o 'valor' ao i.
Será impresso 10.

2.
a) 19, 21, 23, 25, 27, 30

b) 

3. Se const quantidadeTotal = 4
*
**
***
****
*/

//Escritas
//1.
//a)
let quantosPets = Number(prompt("Quantos animais de estimação você tem?"))

let nomeDoPet = []

if(quantosPets == 0) {
    console.log("Que pena! Você pode adotar um pet!")
    //b e c)
} else {
    for (let i= 0;i <quantosPets; i++){
        nomeDoPet[i] = prompt("Qual o nome do pet?")
        console.log(nomeDoPet[i])

    }
}


//2.
//a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0;i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}
//b)
for(let i of arrayOriginal) {
    console.log(i/10)
}
//c) ?????
let array1 = []
    for (let i of arrayOriginal){
        if ((i % 2) == 0) {
            array1.push(i)
        }
    }
console.log(array1)
//d) ?
//o cérebro deu um tilt kkkkkkk, parei kkkkkkrying

//e) ?

