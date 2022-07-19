import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { PaymentRegistrationDTO } from "../model/types";
import PaymentBusiness from "../business/PaymentBusiness";


export class PaymentController {
    async registerPayment (req: Request, res: Response) {

        const{client_id, buyer_name, buyer_email, buyer_cpf, payment_amout, payment_type, card_name, card_number, card_expiration_date, card_CVV} = req.body
        
        try {

            const input: PaymentRegistrationDTO = {
                client_id, buyer_name, buyer_email, buyer_cpf, payment_amout, payment_type, card_name, card_number, card_expiration_date, card_CVV
            }
            const result = await PaymentBusiness.register(input)

            res.status(200).send(result)
            
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}