// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';


const app: Express = express();

app.use(express.json());
app.use(cors());

//1. ------------------------------------------------------------------------------------------------------------------------------------------
//a) Permite enviar uma query para o banco usando SQL diretamente.

//b)
const updateName = async (name:string):Promise<any> => {
    let searchActor = await connection.raw(`SELECT * FROM Actor WHERE name LIKE "%${name}%"`)
    return searchActor
}

app.get("/actor/:name", async (req: Request, res:Response) =>{
    try {
        const result = await updateName(req.params.name)
        res.status(200).send(result[0])
    } catch (error: any) {
        
    }
})

//c)
const updateSeachGender = (gender: string) => {
    let searchGender = connection.raw(`SELECT COUNT (*) FROM Actor WHERE gender = "${gender}"`)
    return searchGender
}

app.get ("/actor/count/:gender", async (req: Request, res:Response) => {
    try {
        const result = await updateSeachGender(req.params.gender)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send("Ocorreu um erro, por favor tente novamente")
    }
})

//2. ------------------------------------------------------------------------------------------------------------------------------------------
//a)
const updateSalary = async (id: string, salary: string): Promise<any> => {
    await connection("Actor")
      .update({salary: salary,})
      .where("id", id);
  };

app.put("/actor/salary/:id", async  (req: Request, res:Response)=> {
    try {
        await updateSalary(req.params.salary, req.params.id)
        res.status(200).send("Sucesso")
    } catch (error) {
        res.status(400).send("Ocorreu um erro, por favor tente novamente")
    }
})

//b)
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

app.delete("/actor/delete/:id", async (req: Request, res:Response)=> {
    try {
        await deleteActor(req.params.id)
        res.status(200).send("Ator deletado.")
    } catch (error) {
        res.status(400).send("Ocorreu um erro, por favor tente novamente")
    }
})

//c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

app.get("/actor/avg/:gender", async (req: Request, res:Response)=> {
    try {
        const result = await avgSalary(req.params.gender)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Ocorreu um erro, por favor tente novamente")
    }
})

//3. ------------------------------------------------------------------------------------------------------------------------------------------

const actorId = (id: string) => {
    return connection(`Actor`)
       .where({ id })
 };
 
 app.get('/actor/id/:id', async (req: Request, res: Response) => {
    try {
       const result = await actorId(req.params.id)
          .where({ id: req.params.id })
       res.status(200).send(result[0])
    } catch (error: any) {
       res.status(400).send("Ocorreu um erro, por favor tente novamente")
    }
 });

//4. ------------------------------------------------------------------------------------------------------------------------------------------
//a) Acima

//b) Acima


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors