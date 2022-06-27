// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from 'axios';
import { baseURL } from './constants';



const app: Express = express();

app.use(express.json());
app.use(cors());
// 1. ---------------------------------------------------------------------------------------------------------------------------------------------

// async function getSubscribers(): Promise<any[]> {
//    const response = await axios.get(`${baseURL}/subscribers`);
//    return response.data;
//  };

// 2. ---------------------------------------------------------------------------------------------------------------------------------------------

// const getSubscribers = async(): Promise<any[]> => {
//    const response = await axios.get(`${baseURL}/subscribers`);
//    return response.data;
//  };

// 3. ---------------------------------------------------------------------------------------------------------------------------------------------

type user = {
	id: string;
	name: string;
	email: string;
}

// const getSubscribers = async(): Promise<user[]> => {
//    const response = await axios.get(`${baseURL}/subscribers`);
//    return response.data;
//  };

//  const getSubscribers = async (): Promise<user[]> => {
//    const response = await axios.get(`${baseURL}/subscribers`);
//    return response.data.map((res: any) => {
//      return {
//        id: res.id,
//        name: res.name,
//        email: res.email,
//      };
//    });
//  };

// 4. ---------------------------------------------------------------------------------------------------------------------------------------------

const getNews = async() :Promise <any> => {
   const response = await axios.get(`${baseURL}/news`)
   return response.data
}

const news = {
   title: "Brasil conquista hexa no catar",
   content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
   date: Date.now()
}
const createNews = async (news: any) => {
   return axios.put(`${baseURL}/news`, news)
}



// 5. ---------------------------------------------------------------------------------------------------------------------------------------------

// const sendNotifications = async (
//    users: user[],
//    message: string
//  ): Promise<void> => {
 
//    try {
//        for (const user of users) {
//         await axios.post(`${baseURL}/notifications`, {
//           subscriberId: user.id,
//           message: "Confira as noticias"
//         });
//       }
 
//       console.log("All notifications sent");
//     } catch {
//        console.log("Error");
//     }
//  };

// 6. ---------------------------------------------------------------------------------------------------------------------------------------------
const sendNotifications = async (
   users: user[],
   message: string
 ): Promise<void> => {
 
    try {
      const promises = users.map(user =>{
        return axios.post(`${baseURL}/notifications`, {
          subscriberId: user.id,
          message: message,
        })
      })
    
      await Promise.all(promises);
 
    } catch {
       console.log("Error");
    }
 };


 const main = async () => {
   try {
      createNews(news)
      const newNews = await getNews()
      
      //  const subscribers = await getSubscribers()
       console.log(newNews)
   } catch (error: any) {
       const resp = error.response?.data || error.message
       console.log(resp)
   }
};

main();
// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});