import { sign, verify } from "jsonwebtoken"
import { USER_ROLES } from "../entities/User"
import dotenv from "dotenv"

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: USER_ROLES

}

export class Authenticator {

    generateToken = (payload: AuthenticationData): string => {
        const token = sign(
            {id: payload.id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )

        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const payload = verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        }

        return result
    }
}