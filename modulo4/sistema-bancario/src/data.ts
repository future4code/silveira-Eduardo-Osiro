export type Account = {
    name: string,
    CPF: string,
    birthDate: string | number,
    balance: number,
    extract: Extract[]
}

export type Extract = {
    value: number,
    date: number | string,
    description: string
}

export let accounts: Account[] =
    [
        {
            name: "Eduardo Osiro",
            CPF: "49835465178",
            birthDate: "30/12/1956",
            balance: 0,
            extract: [{
                value: 500,
                date: "14/05/2022",
                description: "saldo: "
            }]
        },
        {
            name: "Rafael Bast",
            CPF: "36584612748",
            birthDate: "27/10/1940",
            balance: 0,
            extract: [{
                value: 150000,
                date: "14/05/2022",
                description: "saldo: "
            }]
        },
        {
            name: "Ariane Tier ",
            CPF: "19534879654",
            birthDate: "30/12/1987",
            balance: 0,
            extract: [{
                value: 20,
                date: "14/05/2022",
                description: "saldo: "
            }]
        }
    ]