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


  const dragonDamage = () => {
    const maxValue = dragon.strength
    const minValue = 15
    const damage = Math.round((Math.random() *(maxValue - minValue)) + minValue);
    return damage;
  }

  const warriorDamage = () => {
    const maxValue = warrior.strength * warrior.weaponDmg
    const minValue = warrior.strength
    const damage = Math.round((Math.random() *(maxValue - minValue)) + minValue);
    return damage;
  }

  const mageDamage = () => {
    const maxValue = mage.intelligence * 2
    const minValue = mage.intelligence
    const damage = Math.round((Math.random() *(maxValue - minValue)) + minValue);
    if (mage.mana < 15) {
        return 'Não possui mana suficiente'
    }
    const result = {
        damage: damage,
        mana: (mage.mana - 15)
    }
    return result;
  }


  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      dragon.healthPoints -= warriorDamage;
      warrior.damage = warriorDamage;
    },
    mageTurn: (mageAttack) => {
        const mageDamage = mageAttack(mage);
        dragon.healthPoints -= mageDamage.damage;
        mage.damage = mageDamage.damage;
        mage.mana -= mageDamage.mana
      },
      dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage
      },

  };
  
  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageDamage);
  gameActions.dragonTurn(dragonDamage);

  console.log(battleMembers);