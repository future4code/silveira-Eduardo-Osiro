import { CustomError } from "../CustomError/CustomError";
import { DogDatabase } from "../Data/DogDatabase";
import DogWalk, { DogWalkDB, DogWalkDTO, PriceCalculator } from "../Model/DogWalkClass";
import { IdGenerator } from "../Services/IdGenerator";


export class DogBusiness {

     constructor (
          private dogDatabase: DogDatabase,
          private idGenerator: IdGenerator,
          private priceCalculator: PriceCalculator 
     ) {}

     public async createWalk (input: DogWalkDTO) {
          try {
               
               const {date, duration, latitude, longitude, pets, start_time, end_time} = input

               if (!date || !duration || !latitude || !longitude || !pets || !start_time || !end_time) {
                    throw new CustomError(422, "Campos em branco.")
               }
               const id = this.idGenerator.generateId()
               const status = "Agendado"
               const price = this.priceCalculator.PricePerWalk(duration, pets)

               const newWalk: DogWalkDB = {
                    id,
                    status,
                    price,
                    date,
                    duration,
                    latitude,
                    longitude,
                    pets,
                    start_time,
                    end_time,
                    
               }
               
               await this.dogDatabase.createWalk(newWalk)

               return newWalk

          } catch (error: any) {
               throw new CustomError(error.statusCode, error.message)
          }
     }

     public async getWalkInfo (id: string) {
          try {
               if (!id) {
                    throw new CustomError(422, "Id não fornecido.");
               }

               const response = await this.dogDatabase.getWalkInfo(id)

               return response
          } catch (error:any ) {
               throw new CustomError(error.statusCode, error.message)
          }
     }
}

export default new DogBusiness (
     new DogDatabase(),
     new IdGenerator(),
     new PriceCalculator()
)