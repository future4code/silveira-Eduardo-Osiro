

export interface SlipRegistrationDTO {
     client_id: string,
     buyer_name: string,
     buyer_email: string,
     buyer_cpf: string,
     payment_amount: number,
     payment_type: string
 }

export type SlipRegistrationDB = SlipRegistrationDTO & {id: string, slip_number: string}

