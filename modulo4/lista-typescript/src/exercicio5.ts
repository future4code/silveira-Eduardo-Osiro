const usuarios: Class[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type Class = {
    name: string,
    email: string,
    role: string
}

function retornaEmailAdmin (usuarios: Class[]): string[] {
    return usuarios.filter((item) => {
        return item.role === "admin"
    }).map((item2) => {
        return item2.email
    })
}

console.log(retornaEmailAdmin(usuarios))