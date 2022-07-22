import { Request, Response } from "express";
import PaymentSlipBusiness from "../business/PaymentSlipBusiness";
import { SlipRegistrationDTO } from "../model/SlipModel";



export class PaymentSlipController {
    async slipPayment (req: Request, res: Response) {

        const{client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type} = req.body
        
        try {

            const input: SlipRegistrationDTO = {client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type}
            const result = await PaymentSlipBusiness.slipPayment(input)

            res.status(200).send(result)
            
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}
