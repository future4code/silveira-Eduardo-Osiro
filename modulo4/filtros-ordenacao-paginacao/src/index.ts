// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {application, Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { getAllUsers, getUserByType } from './exercicio1';
import { getLimitPage } from './exercicio3';
import { getAllInfo } from './exercicio4';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/user", getAllUsers)
app.get("/userByType", getUserByType)
app.get("/page", getLimitPage)
app.get("/all", getAllInfo)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});