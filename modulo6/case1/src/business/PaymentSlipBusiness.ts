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

            const {client_id, buyer_name, buyer_email, buyer_cpf, payment_amout, payment_type } = input

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
            if (!payment_amout) {
                throw new CustomError(422, "No amount described.")
            }
            if (!payment_type) {
                throw new CustomError(422, "Missing payment type.")
            }

            const id = this.idGenerator.generateId()

            const result: SlipRegistrationDB = {
                id,
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                payment_amout,
                payment_type
            }

            await this.paymentSlipData.createSlipPayment(result)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new PaymentSlipBusiness(
    new IdGenerator(),
    new PaymentSlipData()
)