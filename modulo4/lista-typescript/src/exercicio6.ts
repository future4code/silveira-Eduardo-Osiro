
const entrada: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function retornaDevedores (entrada: Clientes[]): any {
    const clientefolgado = entrada.filter((item) => {
        const saldoNovo: number = item.debitos.reduce((total, atual) => total += atual, 0)
        const diferença = item.saldoTotal - saldoNovo
        item.saldoTotal = diferença
        if (diferença < 0) {
            return true
        } else {
            return false
        }
})
    return clientefolgado

}

console.log(retornaDevedores(entrada))