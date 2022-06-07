import express from "express";
import cors from "cors";
import { aFazer, AFazeres } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//--------------------------------------------------------------------------------------------------------------------------------------
app.get("/ping", (request, response) => {          
    response.send("Pong! 🏓")
})

//---------------------------------------------------------------------------------------------------------------------------------------
app.get("/afazer", (request, response) => {
    const terminado = aFazer.filter((item) => {
        return item.completed === true
    })
    response.send(terminado)
})

//----------------------------------------------------------------------------------------------------------------------------------------

app.post("/addtarefas", (request, response) => {
    const userId = Number(request.headers.authorization)
    const id = aFazer.length + 1
    const novaTarefa: AFazeres = {
        userId: userId,
        id: id,
        title: request.body.title ,
        completed: request.body.completed
    }
    aFazer.push(novaTarefa)
    response.status(200).send(aFazer)
})

//----------------------------------------------------------------------------------------------------------------------------------------

app.put("/afazer/:id/status", (request, response) => {
    const afazerID = Number(request.params.id)
    const listaNova = aFazer.map((item) => {
        if (afazerID === item.id){
            return {...item, completed: !item.completed}
        } else {
            return item
        }
    })
    const index = aFazer.findIndex((item) => {
        return item.id === afazerID
    })
    if (Number(request.params.id) && index !== -1) {
    response.status(200).send(listaNova)
    }
})

//----------------------------------------------------------------------------------------------------------------------------------------
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});