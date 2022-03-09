```
function calculaPrecoTotal(quantidade) {
  let macaMenosDoze = 1.30
  let macaDozeOuMais = 1 
  let precoFinal
  if (quantidade < 12){
    precoFinal = quantidade * macaMenosDoze
  } else {
    precoFinal = quantidade * macaDozeOuMais
  }
  return precoFinal
}
```