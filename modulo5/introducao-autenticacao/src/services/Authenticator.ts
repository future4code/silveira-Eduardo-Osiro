import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types';
import dotenv from 'dotenv';

require('dotenv').config();

export default class Authenticator {
    generateToken = (payload: AuthenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: '1min'
            }
        )
    };

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )
        return tokenData as AuthenticationData
    }
};
