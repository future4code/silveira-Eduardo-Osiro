export class SlipModel {
     constructor(
          private payment_id: string,
          private client_id: string,
          private buyer_name: string,
          private buyer_email: string,
          private buyer_cpf: string,
          private payment_amout: number,
          private payment_type: string,
          private card_name: string,
          private card_number: string,
          private card_expiration_date: string,
          private card_CVV: string
     ) {}
     public getPaymentId() {
          return this.payment_id
     }
     public getClientId() {
          return this.client_id
     }
     public getBuyerName() {
          return this.buyer_name
     }
     public getBuyerEmail() {
          return this.buyer_email
     }
     public getBuyerCPF() {
          return this.buyer_cpf
     }
     public getPaymentAmount() {
          return this.payment_amout
     }
     public getPaymentType() {
          return this.payment_type
     }
     public getCardName() {
          return this.card_name
     }
     public getCardNumber() {
          return this.card_number
     }
     public getCardExpirationDate() {
          return this.card_expiration_date
     }
     public getCardCVV() {
          return this.card_CVV
     }
}

export interface CreditCardRegistrationDTO {
     client_id: string,
     buyer_name: string,
     buyer_email: string,
     buyer_cpf: string,
     payment_amout: number,
     payment_type: string,
     card_name: string,
     card_number: string,
     card_expiration_date: string,
     card_CVV: string
 }