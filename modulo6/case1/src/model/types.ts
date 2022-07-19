export type AuthenticationData = {
    id: string
}

export enum PAYMENT_TYPE {
    SLIP = 'SLIP',
    CREDITCARD = 'CREDITCARD'
}

export interface PaymentRegistrationDTO {
    client_id: string,
    buyer_name: string,
    buyer_email: string,
    buyer_cpf: string,
    payment_amout: number,
    payment_type: string,
    card_name?: string,
    card_number?: string,
    card_expiration_date?: string,
    card_CVV?: string
}

