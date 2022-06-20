//1.

//a) Serve para inicializar variáveis.

//b) 
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }
  
//   class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

//   const newUser = new UserAccount("15915612332", "Eduardo", 30)

// Apenas uma vez.

//c) Só é possível por métodos públicos.

//2.
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    public getDate (): string {
        return this.date
    }

    public getValue (): number {
        return this.value
    }
    
    public getDescription (): string {
        return this.description
    }

  }

  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf (): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const newUser = new UserAccount("15915612332", "Eduardo", 30);
const newTransaction = new Transaction ("25/06/2022", 100,"Comprar comida" )

newUser.setTransactions(newTransaction)
console.log(newUser.getTransactions())

//3.

class Bank {
    private accounts: UserAccount[];
        
    constructor (accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }

    public getAccounts(): UserAccount[]{
        return this.accounts
    }
}



