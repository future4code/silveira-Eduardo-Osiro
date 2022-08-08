import { PaymentSlipData } from "../data/PaymentSlipDatabase";
import { CustomError } from "../error/CustomError";
import { SlipRegistrationDB, SlipRegistrationDTO } from "../model/SlipModel";
import { IdGenerator } from "../services/IdGenerator";


export class PaymentSlipBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private paymentSlipData: PaymentSlipData
    ) {}

    async slipPayment(input: SlipRegistrationDTO) {
        try {

            const {client_id, buyer_name, buyer_email, buyer_cpf, payment_amount, payment_type } = input

            if (!client_id) {
                throw new CustomError(422, "Client id is missing.")
            }
            if (!buyer_name) {
                throw new CustomError(422, "Name missing.")
            }
            if (!buyer_email) {
                throw new CustomError(422, "Email is missing.")
            }
            if (!buyer_cpf) {
                throw new CustomError(422, "CPF is missing.")
            }
            if (!payment_amount) {
                throw new CustomError(422, "No amount described.")
            }
            if (!payment_type) {
                throw new CustomError(422, "Missing payment type.")
            }
            
            const payment: SlipRegistrationDB = {
                id: this.idGenerator.generateId(),
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amount,
                payment_type,
                slip_number: this.slipNumberGenerator()
            }
            
            await this.paymentSlipData.createSlipPayment(payment)

            const result = {paymentId: payment.id, slipNumber: payment.slip_number}

            return result

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    private slipNumberGenerator = () => {
        const CHARACTERS = "0123456789"
            let number = ""
            for(let i = 0; i <= 47; i++) {
                const index = Math.floor(this.numberDraw(CHARACTERS.length - 1))
                number += CHARACTERS[index]
            }
            return number
    }

    private numberDraw = (length:number) => {
        return Math.floor(Math.random() * length)
    }
}

export default new PaymentSlipBusiness(
    new IdGenerator(),
    new PaymentSlipData()
)