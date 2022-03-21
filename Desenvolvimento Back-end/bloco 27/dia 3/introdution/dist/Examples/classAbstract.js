"use strict";
class AnimalAbstract {
    constructor(name) {
        this.name = name;
    }
}
class BirdAbstract extends AnimalAbstract {
    move() { console.log(`${this.name} está voando.`); }
}
class MammalAbstract extends AnimalAbstract {
    move() { console.log(`${this.name} está andando.`); }
}
class FishAbstract extends AnimalAbstract {
    move() { console.log(`${this.name} está nadando.`); }
}
const a_Abstract = new FishAbstract('Tubarão');
const b_Abstract = new BirdAbstract('Papagaio');
const m_Abstract = new MammalAbstract('Tatu');
const myMoveAbstract = (animal) => {
    animal.move();
};
myMove(a_Abstract);
myMove(b_Abstract);
myMove(m_Abstract);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/ 
