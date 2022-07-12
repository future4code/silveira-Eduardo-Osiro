import { performAttackValidator, validateCharacter } from "../src"
import { Character } from "../src/model/Character"

describe("testes exercicios 2 - validação de personagem", () =>{
    test("Should return false if name is empty", () => {
        const result = validateCharacter ({
            name: "",
            life: 1500,
            strength: 500,
            defense: 200
        })
        expect(result).toBe(false)
    })
    test("Should return false if life equals zero", () => {
        const result = validateCharacter ({
            name: "Hanni't",
            life: 0,
            strength: 500,
            defense: 200
        })
        expect(result).toBe(false)
    })    
    test("Should return false if strength equals zero", () => {
        const result = validateCharacter ({
            name: "Hanni't",
            life: 1500,
            strength: 0,
            defense: 200
        })
        expect(result).toBe(false)
    })    
    test("Should return false if defense equals zero", () => {
        const result = validateCharacter ({
            name: "Hanni't",
            life: 1500,
            strength: 500,
            defense: 0
        })
        expect(result).toBe(false)
    })
    test("Should return false if life or strength or defense has negative value", () => {
        const result = validateCharacter ({
            name: "Hanni't",
            life: 1500,
            strength: -500,
            defense: 200
        })
        expect(result).toBe(false)
    })
    test("Unitary name test", () => {
        const result = validateCharacter ({
            name: "Hanni't",
            life: 1500,
            strength: 500,
            defense: 200
        })
        expect(result).toBe(true)
    })
})

describe("performAttack", () => {

    test("jest.fn", () =>{
        const mock = jest.fn(() => {
            const user = {
                name: "batata",
                age: 30
            }
        })
    })
    test("Successful mock validateCharacter", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })

    test("Unsuccessful mock validateCharacter", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})

describe("Perform Attack Tests", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Hanni't",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Soul Eater",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttackValidator(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

      test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Soul Eater",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttackValidator(attacker, defender, validatorMock as any);
        } catch (err:any) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });
})

