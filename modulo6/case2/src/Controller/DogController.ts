import { Request, Response } from "express";
import DogBusiness from "../Business/DogBusiness";
import { DogWalkDTO } from "../Model/DogWalkClass";


export class DogController {

     public async createWalk (req:Request, res: Response) {
          const {date, duration, latitude, longitude, pets, start_time, end_time} = req.body
          try {

               const input: DogWalkDTO = {
                    date,
                    duration,
                    latitude,
                    longitude,
                    pets,
                    start_time,
                    end_time
               }

               const response = await DogBusiness.createWalk(input)

               res.status(201).send(response)
          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }

     public async getWalkInfo (req: Request, res: Response) {
          try {
               const id = req.params.id

               const response = await DogBusiness.getWalkInfo(id)

               res.status(200).send(response)

          } catch (error:any) {
               res.status(400).send(error.message)
          }
     }
}