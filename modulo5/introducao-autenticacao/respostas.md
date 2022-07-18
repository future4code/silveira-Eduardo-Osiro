1.
a) A combinação gera uma autenticação mais segura que sem chances de repetição.

b)
import { v4 } from "uuid";

export class GenerateID {
    id = (): string => {
        return v4()
    }
}

2.
a) Espera a conexão, insere id, email e password na tabela USER, através da função createUser.

b)
CREATE TABLE IF NOT EXISTS aula55_User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c)
const functionCreateUser = async (id: string, email: string, password: string) => {
    await connection('aula55_User')
        .insert({
            id: id,
            email: email,
            password: password
        })
}

3.
a) É suado 'as string' para que o valor recebido seja formatado como string podendo ser usado para gerar o token.

b)

7.
a) Permite que a tipagem seja de qualquer tipo de variável.



