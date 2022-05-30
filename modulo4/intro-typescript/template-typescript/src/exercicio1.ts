// Exercício 1

function checaTriangulo(a: string, b: string, c: string): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  const lado: string = checaTriangulo("Escaleno", "Equilátero", "Isósceles")

  console.log(lado)


