import express from "express";
import cors from "cors";
import { produtos, Produto } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//----------------------------------------------------------------------------------------------------------------

app.get("/test", (req, res) => {
    res.status(200).send("A API está funcionando corretamente. :D")
})

//----------------------------------------------------------------------------------------------------------------

app.post("/adicionaproduto", (req, res) => {
    const id = Math.random().toString(36).substr(2, 9)
    try {
        const novoProduto: Produto = {
            id: id,
            name: req.body.name,
            price: req.body.price
        }
        produtos.push(novoProduto)
        res.status(200).send(produtos)
    }
    catch{
        res.status(400)
    }
})
