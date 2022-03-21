"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = [];
class LocalDbModel {
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastId = db.length > 0 ? db[db.length - 1].id : 0;
            const newCharacter = Object.assign({ id: lastId + 1 }, character);
            db.push(newCharacter);
            return newCharacter;
        });
    }
    ;
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            const idToUpdate = db.findIndex((character) => character.id === id);
            if (idToUpdate < 0)
                throw new Error('Character not found');
            db[idToUpdate] = Object.assign(Object.assign({}, db[idToUpdate]), character);
            return db[idToUpdate];
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idToDelete = db.findIndex((character) => character.id === id);
            if (idToDelete < 0)
                throw new Error('Character not found');
            const deletedItem = db.splice(idToDelete, 1);
            if (deletedItem.length > 0)
                return true;
            return false;
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return db;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idToGet = db.findIndex((character) => character.id === id);
            if (idToGet < 0)
                throw new Error('Character not found');
            return db[idToGet];
        });
    }
}
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield this.model.create(character);
            return ({ status: 201, data: newCharacter });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacter = yield this.model.getAll();
            return ({ status: 200, data: allCharacter });
        });
    }
}
class MockDbModel {
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character created');
            return { id: 1, name: 'Peach', specialMove: 'Toad' };
        });
    }
    ;
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character updated');
            return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character deleted');
            return true;
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
                { id: 2, name: 'Kirby', specialMove: 'Inhale' }
            ];
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'Mario', specialMove: 'Fireball' };
        });
    }
}
const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);
const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
