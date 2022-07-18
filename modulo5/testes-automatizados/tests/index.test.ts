
import { performPurchase } from "../src"
import { User } from "../src/model/User"

describe("aula testes-automatizados", () => {

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Eduardo",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Eduardo",
		balance: 60
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Eduardo",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Eduardo",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})

})