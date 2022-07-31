import { CustomError } from "../CustomError/CustomError";
import { DogWalkDB } from "../Model/DogWalkClass";
import { BaseDatabase } from "./BaseDatabase";


export class DogDatabase extends BaseDatabase {

     private static TABLE_NAME = "dog_hero_walk"

     public async createWalk (input: DogWalkDB) {
           try {
               
               await BaseDatabase.connection
               .insert(input)
               .into(DogDatabase.TABLE_NAME)

           } catch (error:any ) {
               throw new CustomError(400, error.sqlMessage)
           }
     }

     public async getWalkInfo (id: string) {
        try {
            
            const result = await BaseDatabase.connection
            .select('duration')
            .where({id})
            .from(DogDatabase.TABLE_NAME)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
     }

}