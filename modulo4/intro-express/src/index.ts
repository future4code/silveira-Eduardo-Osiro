import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//1.

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//2.

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const users: User[] = [
{
    id: 1,
    name: "Batata",
    phone: 999999999,
    email: "batata@batata.com.br",
    website: "puredebatata.com.br"
},
{
    id: 2,
    name: "Batata Frita",
    phone: 999999998,
    email: "batatafrita@batata.com.br",
    website: "puredebatatafrita.com.br"
},
{
    id: 3,
    name: "Batata Assada",
    phone: 999999997,
    email: "batataassada@batata.com.br",
    website: "puredebatataassada.com.br"
}
]

app.get("/getusers", (req, res) => {          
    res.status(200).send(users)
})

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const posts: Post[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 3,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 4,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
]

app.get("/getposts", (req, res) => {          
    res.status(200).send(posts)
})

//6. Separados, deixa mais organizado.

//8. 
app.get("/post/:id", (req, res) => {    

    const id:number = Number(req.params.id)

    const postEspecifico = posts.filter((post) =>{
        return post.id == id
    })      
    res.status(200).send(postEspecifico)
})

//9.

app.delete("/post/:id", (req, res) => {


    const index: number = posts.findIndex((item) => {
        return item.id == Number(req.params.id)
    })

    posts.splice(index, 1)
    
    res.status(200).send("Deletado")
    


})
