
// Exercício 1:

const exercise = process.argv[2]

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log("\033[1;36m", `Olá, ${name}! Você tem ${age} anos.`)


const newAge = age + 7

if (name && age) {
    console.log("\033[5;30m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`)
} else {
    console.log("\033[5;30m", "deu ruim, boa sorte ai")
}



