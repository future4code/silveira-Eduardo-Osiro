```
function calculaNota(ex, p1, p2) {
    let notaTotal = ((ex*1) + (p1*2) + (p2*3)) / (1+2+3)
    
    if (notaTotal >= 9) {
      return "A"
    } else if (notaTotal >= 7.5 && notaTotal < 9){
      return"B"
    } else  if (notaTotal >=6 && notaTotal <7.5) {
      return "C"
    } else (notaTotal < 6) 
      return "D"
```