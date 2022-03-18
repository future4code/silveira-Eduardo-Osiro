```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let repeticao = 0
  for (let elemento of arrayDeNumeros) {
    if (elemento === numeroEscolhido) {
      repeticao = repeticao + 1
    } 
  } 
  if (repeticao > 0) {
    return `O número ${numeroEscolhido} aparece ${repeticao}x`
  } else {
    return "Número não encontrado"
  }
}
```