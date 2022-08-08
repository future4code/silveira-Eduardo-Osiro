import { PaymentCreditCardData } from "../data/PaymentCreditCardDatabase";
import { CustomError } from "../error/CustomError";
import { CreditCardRegistrationDB, CreditCardRegistrationDTO } from "../model/CreditCardModel";
import { SlipRegistrationDTO } from "../model/SlipModel";
import { IdGenerator } from "../services/IdGenerator";


export class PaymentCreditCardBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private paymentCreditCardData: PaymentCreditCardData
    ) {}

    async creditCardPayment (input: CreditCardRegistrationDTO) {
        try {
            
            const {client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type, card_name, card_number, card_expiration_date, card_CVV} = input

            if(!client_id) {
                throw new CustomError(422, "Client id is missing.")
            }
            if(!buyer_name) {
                throw new CustomError(422, "Name missing.")
            }
            if(!buyer_email) {
                throw new CustomError(422, "Email is missing.")
            }
            if(!buyer_cpf) {
                throw new CustomError(422, "CPF is missing.")
            }
            if(!payment_amount) {
                throw new CustomError(422, "No amount described.")
            }
            if(!payment_type) {
                throw new CustomError(422, "Missing payment type.")
            }
            if(!card_name) {
                throw new CustomError(422, "Card name was not inserted.")
            }
            if(!card_number) {
                throw new CustomError(422, "Card number not informed.")
            }
            if(!card_expiration_date) {
                throw new CustomError(422, "expiration date not informed.")
            }
            if(!card_CVV) {
                throw new CustomError(422, "CVV not informed.")
            }

            const id = this.idGenerator.generateId()

            const result: CreditCardRegistrationDB = {
                id,
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type,
                card_name,
                card_number,
                card_expiration_date,
                card_CVV
            }

            await this.paymentCreditCardData.createCreditCardPayment(result)

            const response = {paymentId: result.id, amount: result.payment_amount}

            return response
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new PaymentCreditCardBusiness (
    new IdGenerator(),
    new PaymentCreditCardData()
)