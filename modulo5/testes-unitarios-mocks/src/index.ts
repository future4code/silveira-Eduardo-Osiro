import { Character } from "./model/Character";


export const validateCharacter = (input: Character) :boolean => {
    if ( !input.name || input.life === undefined || input.defense === undefined || input.strength === undefined ) {
        return false;
    }

    if ( input.life <= 0 || input.strength <= 0 || input.defense <= 0 ) {
        return false;
    }

    return true
}



export const performAttackValidator = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        return "Invalid character."
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }

}

//4. No callidateCharacter
