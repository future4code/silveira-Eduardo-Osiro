// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length  
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => {
      return a - b
  })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let array4 = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            array4.push(numero)
        }
    }
    return array4
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let array5 = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            numero = numero ** 2 
            array5.push(numero)
            }
        }
    return array5
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array8 = []
    for (let i = 0; array8.length < n; i++) {
        if (i % 2 == 0) {
      array8.push(i)
    }
    }
    return array8
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB ) && (ladoB === ladoC) && (ladoC === ladoA)) {
        return 'Equilátero'
    } else if ((ladoA != ladoB ) && (ladoB != ladoC) && (ladoC != ladoA)) {
        return 'Escaleno'
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
        return 'Isósceles'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const permissao = pessoas.filter((item, index, array) => {
        return (item.altura >= 1.5) && (item.idade > 14) && (item.idade < 60)
    } )
    return permissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const naoPermissao = pessoas.filter((item, index, array) => {
       return (item.altura <1.5 ) || (item.idade < 14) || (item.idade > 60 )
   })
   return naoPermissao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let objeto of contas) {
        for (let valor of objeto.compras) {
            objeto.saldoTotal = objeto.saldoTotal - valor
         }
        objeto.compras = []
    }
            return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordenado = consultas.sort((a, b) => {
        return a.nome.localeCompare(b.nome)
    })
    return ordenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}