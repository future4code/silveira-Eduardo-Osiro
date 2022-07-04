import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/user";


export class UserDatabase extends BaseDatabase {

  public async insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await BaseDatabase.connection("User_Arq")
        .insert({
          id,
          name,
          email,
          password,
          role
        })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await BaseDatabase.connection("User_Arq")
        .select('*')
        .where({ email })
      console.log(result)
      if (!result[0]){
        throw new Error("batata");
      }
      
      return result[0]

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}