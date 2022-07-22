import { Router } from "express";
import { GetPaymentInfoController } from "../controller/GetPaymentInfoController";
import { PaymentCreditCardController } from "../controller/PaymentCreditCardController";
import {PaymentSlipController} from '../controller/PaymentSlipController'


export const paymentRouter = Router()

const paymentSlipController = new PaymentSlipController()
const paymentCreditCardController = new PaymentCreditCardController()

const getPaymentsController = new GetPaymentInfoController()


paymentRouter.post('/slipPayment', paymentSlipController.slipPayment)
paymentRouter.post('/cardPayment', paymentCreditCardController.cardPayment)

paymentRouter.get('/getSlipPayment/:id', getPaymentsController.getSlipPayment)
paymentRouter.get('/getCardPayment/:id', getPaymentsController.getCreditCardPayment)