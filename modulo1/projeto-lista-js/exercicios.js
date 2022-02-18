// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = +prompt("Digite altura:")
  let largura = +prompt("digite largura:")
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = +prompt("Qual o ano atual:")
  let anoNascimento = +prompt("Ano do seu nascimento:")
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return  peso / (altura**2)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Cor favorita 1:")
  const cor2 = prompt("Cor favorita 2:")
  const cor3 = prompt("Cor favorita 3:")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   return string1.length === string2.length 
   
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeriroUltimo = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = primeriroUltimo
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual1 = prompt("Ano atual:")
  const anoDeNascimento = prompt("Ano de nascimento:")
  const emissaoCarteira = prompt("Qual ano de emissão de carteira:")
  const idadeAtual = (anoAtual1 - anoDeNascimento)
  const idadeCNH = anoAtual1 - emissaoCarteira

  const menosDe20 = (idadeAtual <= 20 && idadeCNH >= 5)
  const entre20e50 = ((idadeAtual >= 20 && idadeAtual < 50) && idadeCNH >= 10)
  const maiorQue50 = (idadeAtual > 50 && idadeCNH >= 15)

  console.log( menosDe20 || entre20e50 || maiorQue50)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 === 0
  const condicao2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return (condicao1 || condicao2)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorQue18 = prompt("Tem mais de 18 anos?")
  const ensinoMedio = prompt("Tem ensino médio completo?")
  const dispHorario = prompt("Tem disponibilidade de horário?")

  const cond1 = maiorQue18.includes("sim")
  const cond2 = ensinoMedio.includes("sim") 
  const cond3 = dispHorario.includes("sim")

  console.log(cond1 && cond2 && cond3)
}