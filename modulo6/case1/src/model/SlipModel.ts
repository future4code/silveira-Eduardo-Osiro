
// export class SlipModel {
//      constructor(
//           private payment_id: string,
//           private client_id: string,
//           private buyer_name: string,
//           private buyer_email: string,
//           private buyer_cpf: string,
//           private payment_amout: number,
//           private payment_type: string
//      ) {}
//      public getPaymentId() {
//           return this.payment_id
//      }
//      public getClientId() {
//           return this.client_id
//      }
//      public getBuyerName() {
//           return this.buyer_name
//      }
//      public getBuyerEmail() {
//           return this.buyer_email
//      }
//      public getBuyerCPF() {
//           return this.buyer_cpf
//      }
//      public getPaymentAmount() {
//           return this.payment_amout
//      }
//      public getPaymentType() {
//           return this.payment_type
//      }
// }


export interface SlipRegistrationDTO {
     client_id: string,
     buyer_name: string,
     buyer_email: string,
     buyer_cpf: string,
     payment_amout: number,
     payment_type: string
 }

export type SlipRegistrationDB = SlipRegistrationDTO & {id: string}

