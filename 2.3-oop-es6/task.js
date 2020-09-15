// Задача 1

class Weapon {
  constructor (name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.initialDurability = durability;
    };
  
  takeDamage(damage) {
      this.durability = this.durability - damage;
      if (this.durability < 0) {
        this.durability = 0;
      };
      return this.durability;
  };

  getDamage() {
    let damage = 0;
    if (this.initialDurability >= 0.3 * this.durability) {
      damage = this.attack;
    } else if (this.durability === 0) {
      damage = 0;
    } else {
      damage = this.attack / 2;
    };    
    return damage;
  };

  isBroken() {
    let broken;
    if (this.durability > 0) {
      broken = false;
    } else {
      broken = true;
    };
    return broken;
  };

};

const arm = new Weapon({
  name: 'Рука', 
  attack: 1, 
  durability: Infinity, 
  range: 1,
});

const bow = new Weapon({
  name: 'Лук', 
  attack: 10, 
  durability: 200, 
  range: 3,
});

const sword = new Weapon({
  name: 'Меч', 
  attack: 25, 
  durability: 500, 
  range: 1,
});

const knife = new Weapon({
  name: 'Нож', 
  attack: 5, 
  durability: 300, 
  range: 1,
});

const staff = new Weapon({
  name: 'Посох', 
  attack: 8, 
  durability: 300, 
  range: 2,
});

const longBow = new Weapon({
  name: 'Длинный лук', 
  attack: 15, 
  range: 4,
});

const ax = new Weapon({
name: 'Секира', 
attack: 27, 
durability: 800,
});

const stormStaff = new Weapon({
  name: 'Посох Бури', 
  attack: 10, 
  range: 3,
});

// Задача 2

class Arm extends Weapon {
  constructor(name, attack, durability, range) {
    super('Рука', 1, Infinity, 1)
    };
};

class Bow extends Weapon {
  constructor(name, attack, durability, range) {
    super('Лук', 10, 200, 3)
    };
};

class Sword extends Weapon {
  constructor(name, attack, durability, range) {
    super('Меч', 25, 500, ra1nge)
    };
};

class Knife extends Weapon {
  constructor(name, attack, durability, range) {
    super('Нож', 5, 300, 1)
    };
};

class Staff extends Weapon {
  constructor(name, attack, durability, range) {
    super('Посох', 8, 300, 2)
    };
};

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range)
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
    };
};

class Ax extends Sword {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range)
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    };
};

class StormStaff extends Staff {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range)
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
    };
};