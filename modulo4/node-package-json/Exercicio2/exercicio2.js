// Exercício 2
const operador = process.argv[2]
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


switch(operador) {
        case "soma":
            console.log("\033[0;35m", "Resposta: ", num1+ num2)
            break;
        case "subtracao":
            console.log("\033[0;35m", "Resposta: ", num1 -num2)
            break;
        case "multiplicar":
            console.log("\033[0;35m", "Resposta: ", num1 * num2)
            break;
        case "dividir":
            console.log("\033[0;35m", "Resposta: ", num1 / num2 )
            break;
    }









