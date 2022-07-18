import { connection } from "./BaseDataBase";

export const functionGetUserById = async (id: string): Promise<any> => {
    const result = await connection('User')
        .select('*')
        .where('id', id)

    return result[0]
}