import { Request, Response } from "express";
import PaymentCreditCardBusiness from "../business/PaymentCreditCardBusiness";
import { CreditCardRegistrationDTO } from "../model/CreditCardModel";


export class PaymentCreditCardController {

    async cardPayment (req: Request, res: Response) {

        const{client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type, 
            card_name, card_number, card_expiration_date, card_CVV} = req.body
        
        try {

            const input: CreditCardRegistrationDTO = {
                client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type, card_name, card_number, card_expiration_date, card_CVV
            }
            const result = await PaymentCreditCardBusiness.creditCardPayment(input)

            res.status(200).send(result)
            
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}