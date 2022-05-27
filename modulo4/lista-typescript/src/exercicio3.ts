enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Classificacao = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

const infoFilme: Classificacao = {
    nome: "Duna",
    anoDeLancamento: 2021,
    genero: GENERO.ROMANCE,
    pontuacao: 20
}


function recebeInfo (
            nome: string, 
            anoDeLancamento: number,
            genero: GENERO, 
            pontuacao?: number
            ): Classificacao {
                return {
                    nome: nome,
                    anoDeLancamento: anoDeLancamento,
                    genero: genero,
                    pontuacao: pontuacao
                }
            }
     
console.log(recebeInfo(infoFilme.nome, infoFilme.anoDeLancamento, infoFilme.genero, infoFilme.pontuacao))
    