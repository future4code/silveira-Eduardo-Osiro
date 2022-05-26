//a. 
let minhaString: string = "Sou uma string"
// minhaString = 13
// type number não pode ser designado ao type string

//b.
 let meuNumero: number | string = 19

//c.
const novoObjeto: {
    nome: string,
    idade: number,
    corFAvorita: string
} = {
    nome: "Du",
    idade: 30,
    corFAvorita: "vermelho"
}

type Pessoa = { nome: string, idade: number, corFAvorita: string }

const pessoa1: Pessoa = {
    nome: "Anitta",
    idade: 30,
    corFAvorita: "Roxo"
}
const pessoa2: Pessoa = {
    nome: "Hannibal",
    idade: 68,
    corFAvorita: "Vermelho"
}
const pessoa3: Pessoa = {
    nome: "Filijó",
    idade: 99,
    corFAvorita: "Preto"
}

//d.
enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

const pessoa4: Pessoa = {
    nome: "Anitta",
    idade: 30,
    corFAvorita: Cores.VERDE
}
const pessoa5: Pessoa = {
    nome: "Hannibal",
    idade: 68,
    corFAvorita: Cores.VERMELHO
}
const pessoa6: Pessoa = {
    nome: "Filijó",
    idade: 99,
    corFAvorita: Cores.ANIL
}


