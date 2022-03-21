abstract class CharacterSmash {
  constructor(public character: string, public movimentSpecial: string) {}
  abstract talk(): void
  abstract specialMoviments(): void
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

const intermediary = (character: CharacterSmash) => {
  character.talk()
  character.specialMoviments();
}

const meleeCharacter = new MeleeCharacter('Antonello', 'Soco do Cataclismo');
const longRangeCharacter = new LongRangeCharacter('Osíris', 'Lança Destruidora de mundos');

intermediary(meleeCharacter);
intermediary(longRangeCharacter);