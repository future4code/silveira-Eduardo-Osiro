import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { accounts, Account, Extract } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users",(req: Request, res: Response) => {
    let codeError = 400

    try {
        if (!accounts.length) {
            codeError = 400
            throw new Error("Something went wrong");
        }
        res.status(200).send(accounts)
    } catch (error:any) {
        res.status(codeError).send(error.message)
    }
})

app.post("/newuser", (req: Request, res: Response) => {
    let codeError = 400

    try {
        const {name, CPF, birthDate, balance, extract} = req.body

        const [dia, mes, ano] = req.body.birthDate.split("/")
        let check = 2022 - Number(ano) >= 18
        if (check === false) {
            codeError = 422
            throw new Error("Must be 18 or older.");
            
        }


        if (!name || !CPF || !birthDate || (!balance && balance !== 0) || !extract) {
            codeError = 422
            throw new Error("Invalid parameter");
        }

        const newUser: Account = {
            name: name,
            CPF: CPF,
            birthDate: birthDate,
            balance: balance,
            extract: extract
        }
        accounts.push(newUser)
        res.status(201).send(accounts)

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});