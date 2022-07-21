


export interface CreditCardRegistrationDTO {
     client_id: string,
     buyer_name: string,
     buyer_email: string,
     buyer_cpf: string,
     payment_amount: number,
     payment_type: string,
     card_name: string,
     card_number: string,
     card_expiration_date: string,
     card_CVV: string
 }


export type CreditCardRegistrationDB = CreditCardRegistrationDTO & {id: string}