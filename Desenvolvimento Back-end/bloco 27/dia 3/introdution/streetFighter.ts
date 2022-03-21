interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  async create(character: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  async update(id: number, character: Character) {
    const idToUpdate = db.findIndex((character) => character.id === id);
    if (idToUpdate < 0) throw new Error('Character not found');

    db[idToUpdate] = { ...db[idToUpdate], ...character };
    return db[idToUpdate];
  };

  async delete(id: number) {
    const idToDelete = db.findIndex((character) => character.id === id);
    if (idToDelete < 0) throw new Error('Character not found');

    const deletedItem = db.splice(idToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() {
    return db;
  }

  async getById(id: number) {
    const idToGet = db.findIndex((character) => character.id === id);
    if (idToGet < 0) throw new Error('Character not found');
    return db[idToGet];
  }
}

class CharacterService {
  constructor(readonly model: IModel) { }
  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  /* Implementação dos outros métodos */
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  };

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  };

  async delete(id: number) {
    console.log('character deleted');
    return true;
  };

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' }
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);