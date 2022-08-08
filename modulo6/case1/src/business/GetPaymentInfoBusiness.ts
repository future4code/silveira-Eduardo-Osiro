import { GetPaymentInfoDatabase } from "../data/GetPaymentInfoDatabase";
import { CustomError } from "../error/CustomError";


export class GetPaymentInfoBusiness {

     constructor (
          private getPaymentInfoDatabase: GetPaymentInfoDatabase
     ) {}

     async getCardPayment (id: string) {
          try {
               if (!id) {
                    throw new CustomError(422, "Missing id.")
               }
          
          const response = await this.getPaymentInfoDatabase.getCardPayment(id)

          return response
          } catch (error:any) {
               throw new CustomError(error.statusCode, error.message)
          }

     }

     async getSlipPayment (id: string) {
          try {
               if (!id) {
                    throw new CustomError(422, "Missing id.")
               }
          
          const response = await this.getPaymentInfoDatabase.getSlipPayment(id)

          return response
          } catch (error:any) {
               throw new CustomError(error.statusCode, error.message)
          }
     }
}

export default new GetPaymentInfoBusiness(
     new GetPaymentInfoDatabase()
)