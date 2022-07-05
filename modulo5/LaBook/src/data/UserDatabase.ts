import { BaseDatabase } from "./BaseDatabase";
import { GetUserByEmailResponse } from "../types/getUserByEmailResponse";

export default class UserDatabase extends BaseDatabase {

    protected TABLE_NAME = "labook_usuarios"

    async insertUser (id: string, name: string, email: string, password: string) {
        try {
            
            await BaseDatabase.connection(this.TABLE_NAME)
            .insert({id, name, email, password})

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
    async getUserByEmail (email: string) {
        try {
            const result: GetUserByEmailResponse = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({email})

            return result[0]

        } catch (error:any) {
            throw new Error("error.sqlMessage || error.message");
        }
    }


}