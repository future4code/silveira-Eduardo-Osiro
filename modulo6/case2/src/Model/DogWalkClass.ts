import { CustomError } from "../CustomError/CustomError"


export default class DogWalk {
     constructor (
          private id: string,
          private status: string,
          private date: string,
          private price: number,
          private duration: string,
          private latitude: string,
          private longitude: string,
          private pets: number,
          private start_time: string,
          private end_time: string
     ) {}

     public getId = () => this.id
     public getStatus = () => this.status
     public getDate = () => this.date
     public getPrice = () => this.price
     public getDuration = () => this.duration
     public getLatitude = () => this.latitude
     public getLongitude = () => this.longitude
     public getPets = () => this.pets
     public getStartTime = () => this.start_time
     public getEndTime = () => this.end_time
}

export interface DogWalkDTO {
     date: string,
     duration: string,
     latitude: string,
     longitude: string,
     pets: number,
     start_time: string,
     end_time: string

}

export type DogWalkDB = DogWalkDTO & {id: string, price: number, status: string}

export class PriceCalculator {
     PricePerWalk(duration: string, pets: number) {

          switch (duration) {
               case "30":
                    return 25 + (pets > 1 ? (pets - 1)* 15 : 0);
               case "60":
                    return 35 + (pets > 1 ? (pets - 1)* 15 : 0);
               default:
                    throw new CustomError (422, "Preencha o tempo com as opções de 30 ou 60 minutos.")
          }
     }
}