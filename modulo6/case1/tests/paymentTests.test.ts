import PaymentCreditCardBusiness from "../src/business/PaymentCreditCardBusiness"
import PaymentSlipBusiness from "../src/business/PaymentSlipBusiness"

const inputMock = {
     client_id: 'client' as any,
     buyer_name: 'Eduardo' as any,
     buyer_email: 'edduardo@email.com' as any,
     buyer_cpf: '42123506800' as any,
     payment_amount: 100 as any,
     payment_type: 'CREDITCARD' as any,
     card_name: 'Eduardo' as any,
     card_number: '4318529419382' as any,
     card_expiration_date: '07/30' as any,
     card_CVV: '979' as any
 }

 
describe('test class Payment Business', () => {
     describe('test payment card method', () => {
         test('test invalid client ID', async () => {
             const input = inputMock
             input.client_id = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.client_id = 'client'
                 expect(error.message).toEqual('Invalid Client ID')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer name', async () => {
             const input = inputMock
             input.buyer_name = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.buyer_name = 'Eduardo'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer email', async () => {
             const input = inputMock
             input.buyer_email = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.buyer_email = 'eduardo@email.com'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer CPF', async () => {
             const input = inputMock
             input.buyer_cpf = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.buyer_cpf = '42123506800'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid payment amount', async () => {
             const input = inputMock
             input.payment_amount = undefined
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.payment_amount = 100
                 expect(error.message).toEqual('Invalid Payment Data')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid payment type', async () => {
             const input = inputMock
             input.payment_type = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.payment_type = 'CREDITCARD'
                 expect(error.message).toEqual('Invalid Payment Data')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid credit card', async () => {
             const input = inputMock
             input.card_name = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.card_name = 'Eduardo Osiro'
                 expect(error.message).toEqual('Invalid Credit Card')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid credit card', async () => {
             const input = inputMock
             input.card_number = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.card_number = '7531598524560001'
                 expect(error.message).toEqual('Invalid Credit Card')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid credit card', async () => {
             const input = inputMock
             input.card_expiration_date = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.card_expiration_date = '07/23'
                 expect(error.message).toEqual('Invalid Credit Card')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid credit card', async () => {
             const input = inputMock
             input.card_CVV = ''
             try {
                 await PaymentCreditCardBusiness.creditCardPayment(input)
             } catch (error: any) {
                 input.card_CVV = '070'
                 expect(error.message).toEqual('Invalid Credit Card')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test valid inputs', async () => {
             const input = inputMock
             try {
                 const insert = jest.fn(
                     (input) => PaymentCreditCardBusiness.creditCardPayment(input)
                 )
                 await insert(input)
                 expect(insert(input)).resolves.not.toThrow()
                 expect(insert(input)).resolves.toBeUndefined()
             } catch (error: any) {
             } finally {
                 expect.assertions(2)
             }
         })
     })
 })
 
 describe('test class Payment Slip', () => {
     describe('test payment slip method', () => {
         test('test invalid client ID', async () => {
             const input = inputMock
             input.client_id = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.client_id = 'client'
                 expect(error.message).toEqual('Invalid Client ID')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer name', async () => {
             const input = inputMock
             input.buyer_name = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.buyer_name = 'Eduardo'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer email', async () => {
             const input = inputMock
             input.buyer_email = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.buyer_email = 'eduardo@email.com'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid buyer CPF', async () => {
             const input = inputMock
             input.buyer_cpf = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.buyer_cpf = '42123506800'
                 expect(error.message).toEqual('Invalid Buyer')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid payment amount', async () => {
             const input = inputMock
             input.payment_amount = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.payment_amount = 100
                 expect(error.message).toEqual('Invalid Payment Data')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test invalid payment type', async () => {
             const input = inputMock
             input.payment_type = ''
             try {
                 await PaymentSlipBusiness.slipPayment(input)
             } catch (error: any) {
                 input.payment_type = 'SLIP'
                 expect(error.message).toEqual('Invalid Payment Data')
             } finally {
                 expect.assertions(1)
             }
         })
         test('test valid inputs', async () => {
             const input = inputMock
             try {
                 const insert = jest.fn(
                     (input) => PaymentSlipBusiness.slipPayment(input)
                 )
                 await insert(input)
                 expect(insert(input)).resolves.not.toThrow()
                 expect(insert(input)).resolves.toBeUndefined()
             } catch (error: any) {
             } finally {
                 expect.assertions(2)
             }
         })
     })
 }) 