function anagrama (palavra: string): number {
    let letras: number = palavra.length
    let fatorial: number = 1

    while(letras !== 1) {
        fatorial*= letras
        letras--
    }
    return fatorial
}

console.log(anagrama("mesa")) 