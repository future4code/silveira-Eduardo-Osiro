import express, {Express, Request, Response} from "express";
import cors from "cors";
import { users, User, UserType } from "./data";
import { idText } from "typescript";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//--------------------------------------------------------------------------------------------------------------------------------------------

//1. 
//a) GET
//b) GET '/users'
app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        
        if(!users) {
            codeError = 404
            throw new Error("User not found");
        }

        res.status(200).send(users)

    } catch (error) {
        res.status(codeError).send({message: error})
    }
})

//--------------------------------------------------------------------------------------------------------------------------------------------

//2.
//a) por :type
//b) usando .toUpperCase()

app.get("/users/:type", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const type: string = req.params.type.toUpperCase()
        if(users.length <= 0) {
            codeError = 404
            throw new Error("User not found");
        }
        const userType = users.filter((item) => {
            return item.type === type
        })
        res.status(200).send(userType)

    } catch (error) {
        res.status(codeError).send({message: error})
    }
})

//--------------------------------------------------------------------------------------------------------------------------------------------

//3. 
//a) query params
//b)

app.get("/user", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => {
        return user.name === name 
    })
        if (!user) {
            codeError = 404
            throw new Error("User not found");
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(codeError).send({message: error})
    }
})

//--------------------------------------------------------------------------------------------------------------------------------------------

//4.
//a) nada, ele funciona normalmente. São boas práticas.
//b)

app.post("/users", (req: Request, res: Response) => {
    const { id, name, email, type, age } = req.body
    let codeError: number = 400

    try {
        if (!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error("Invalid Parameter");
        }
        const newUser: User = { id, name, email, type, age }
        users.push(newUser)
        res.status(200).send(users)
    } catch (error: any) {
        res.status(codeError).send({message: error.message})
    }
})