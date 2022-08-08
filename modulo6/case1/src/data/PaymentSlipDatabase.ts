import { CustomError } from "../error/CustomError";
import { SlipRegistrationDB } from "../model/SlipModel";
import { BaseDatabase } from "./BaseDatabase";


export class PaymentSlipData extends BaseDatabase{

     private static TABLE_NAME = "wirecard_payment_slip"

     async createSlipPayment (input: SlipRegistrationDB) {

          try {

               await BaseDatabase.connection
               .insert(input)
               .into(PaymentSlipData.TABLE_NAME)


          } catch (error:any) {
               throw new CustomError(400, error.sqlMessage)
          }
     }

     
}