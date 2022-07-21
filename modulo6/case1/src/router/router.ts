import { Router } from "express";
import { PaymentCreditCardController } from "../controller/PaymentCreditCardController";
import {PaymentSlipController} from '../controller/PaymentSlipController'


export const paymentRouter = Router()

const paymentSlipController = new PaymentSlipController()
const paymentCreditCardController = new PaymentCreditCardController()


paymentRouter.post('/slipPayment', paymentSlipController.slipPayment)
paymentRouter.post('/cardPayment', paymentCreditCardController.cardPayment)