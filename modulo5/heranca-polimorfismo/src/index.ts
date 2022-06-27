import { User, Customer, Client, Place} from "./types";
//1.

const user = new User("6", "batata@batata.com", "Batata", "915263")
console.log(user.getEmail())

//2.

const newCustomer = new Customer("6", "batata@batata.com", "Batata", "915263", "468504506346350")
console.log(newCustomer.getCreditCard())

//3.

console.log({ 
    id: newCustomer.getId(), 
    email: newCustomer.getEmail(), 
    name: newCustomer.getName(), 
    purchaseTotal: newCustomer.purchaseTotal, 
    creditCard: newCustomer.getCreditCard() 
})

//4. e 5.

console.log(newCustomer.introduceYourSelf())

//POLIMORFISMO
//1.

const newClient: Client = {
    name: "Eduardo", 
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}

console.log(newClient)

//2.

class Otherplace extends Place {
    constructor (cep: string) {
        super(cep)
    }
}

const newPlace: Otherplace = new Otherplace("123456789")

console.log(newPlace.getCep())

//3.
//4.
//5.
//6.

