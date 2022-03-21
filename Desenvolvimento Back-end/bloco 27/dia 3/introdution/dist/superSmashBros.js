"use strict";
class CharacterSmash {
    constructor(character, movimentSpecial) {
        this.character = character;
        this.movimentSpecial = movimentSpecial;
    }
}
class MeleeCharacter extends CharacterSmash {
    talk() {
        console.log(`${this.character} Irei lhe destruir com os meus ataques corpo a corpo`);
    }
    specialMoviments() {
        console.log(this.movimentSpecial);
    }
}
class LongRangeCharacter extends CharacterSmash {
    talk() {
        console.log(`${this.character} Irei lhe destruir com os meus ataques de longa distância`);
    }
    specialMoviments() {
        console.log(this.movimentSpecial);
    }
}
const intermediary = (character) => {
    character.talk();
    character.specialMoviments();
};
const meleeCharacter = new MeleeCharacter('Antonello', 'Soco do Cataclismo');
const longRangeCharacter = new LongRangeCharacter('Osíris', 'Lança Destruidora de mundos');
intermediary(meleeCharacter);
intermediary(longRangeCharacter);
