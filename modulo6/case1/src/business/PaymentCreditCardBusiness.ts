// import { CustomError } from "../error/CustomError";
// import { SlipRegistrationDTO } from "../model/SlipModel";


// export class PaymentSlipBusiness {
//     async register (input: SlipRegistrationDTO) {
//         try {
            
//             const {client_id, buyer_name, buyer_email, buyer_cpf, payment_amout, payment_type} = input

//             if(!client_id) {
//                 throw new CustomError(422, "Client id is missing.")
//             }
//             if(!buyer_name) {
//                 throw new CustomError(422, "Name missing.")
//             }
//             if(!buyer_email) {
//                 throw new CustomError(422, "Email is missing.")
//             }
//             if(!buyer_cpf) {
//                 throw new CustomError(422, "CPF is missing.")
//             }
//             if(!payment_amout) {
//                 throw new CustomError(422, "No amount described.")
//             }
//             if(!payment_type) {
//                 throw new CustomError(422, "Missing payment type.")
//             }
//             if(!card_name) {
//                 throw new CustomError(422, "Card name was not inserted.")
//             }
//             if(!card_number) {
//                 throw new CustomError(422, "Card number not informed.")
//             }
//             if(!card_expiration_date) {
//                 throw new CustomError(422, "expiration date not informed.")
//             }
//             if(!card_CVV) {
//                 throw new CustomError(422, "CVV not informed.")
//             }

//         } catch (error:any) {
//             throw new CustomError(error.statusCode, error.message)
//         }
//     }
// }

// export default new PaymentSlipBusiness (
    
// )