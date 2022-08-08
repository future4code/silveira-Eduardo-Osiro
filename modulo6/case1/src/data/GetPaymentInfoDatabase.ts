import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";


export class GetPaymentInfoDatabase extends BaseDatabase {

     private static TABLE_NAME1 = "wirecard_payment_creditcard"

     private static TABLE_NAME2 = "wirecard_payment_slip"

     async getCardPayment (id: string) {

          try {
               const response = await BaseDatabase.connection()
               .select("*")
               .where({id})
               .from(GetPaymentInfoDatabase.TABLE_NAME1)
     
               return response
               
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     async getSlipPayment (id: string) {
          
          try {
               const response = await BaseDatabase.connection
               .select("*")
               .where({id})
               .from(GetPaymentInfoDatabase.TABLE_NAME2)

               return response
               
          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }
}