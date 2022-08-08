import { Request, Response } from "express";
import GetPaymentInfoBusiness from "../business/GetPaymentInfoBusiness";


export class GetPaymentInfoController {
     async getCreditCardPayment(req: Request, res: Response) {
          try {
               const id = req.params.id

               const response = await GetPaymentInfoBusiness.getCardPayment(id)

               res.status(200).send(response)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }

     async getSlipPayment(req: Request, res: Response) {
          try {
               const id = req.params.id

               const response = await GetPaymentInfoBusiness.getSlipPayment(id)

               res.status(200).send(response)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }
}