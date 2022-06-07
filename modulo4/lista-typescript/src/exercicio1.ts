type Dados = {
    name: string,
    birthDate: string
} 

const info: Dados = {
    name: "Eduardo",
    birthDate: "27/02/1992"
}

function answer(info: Dados) {
    return info.birthDate.split("/")
}

console.log(`Olá, me chamo ${info.name}, nasci no dia ${answer(info)[0]} do mês ${answer(info)[1]} do ano ${answer(info)[2]}.`)