const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte 1

const dmgCalc = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

const dragonDmg = () => dmgCalc(dragon.strength, 15);

const warriorDmg = () => dmgCalc((warrior.strength * warrior.weaponDmg), warrior.strength);

const mageDmg = () => {
  let dmg = 'Não possui mana suficiente';
  let mp = 0;
  if (mage.mana >= 15) {
    dmg = dmgCalc((mage.intelligence * 2), mage.intelligence);
    mp = 15
  }
  return {damage: dmg, manaUsed: mp}
}

// Parte 2

const gameActions = {
  warriorTurn: param => {
    const dmg = param();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: param => {
    const dmg = param().damage;
    const mp = param().manaUsed;
    if (typeof dmg === 'string') {
      mage.damage = dmg
    } else {
      mage.damage = dmg;
      mage.mana -= mp;
      dragon.healthPoints -= dmg
    }
  },
  dragonTurn: param => {
    const dmg = param();
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  turnResult: battleMembers
};

gameActions.warriorTurn(warriorDmg)
gameActions.mageTurn(mageDmg)
gameActions.dragonTurn(dragonDmg)

console.table(gameActions.turnResult);