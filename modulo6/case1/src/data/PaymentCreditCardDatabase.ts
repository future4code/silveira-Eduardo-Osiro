import { CustomError } from "../error/CustomError";
import { SlipRegistrationDB } from "../model/SlipModel";
import { BaseDatabase } from "./BaseDatabase";


export class PaymentCreditCardData extends BaseDatabase{

     private static TABLE_NAME = "wirecard_payment_creditcard"

     async createCreditCardPayment (input: SlipRegistrationDB) {

          try {

               await BaseDatabase.connection
               .insert(input)
               .into(PaymentCreditCardData.TABLE_NAME)


          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     
}