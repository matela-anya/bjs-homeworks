// Задача 1

class Weapon {
    constructor (name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
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
      let durorig = this.durability;
      if (this.durability >= 0.3 * durorig) {
        /* Не понимаю, как сохранить изначальное значение durability, чтобы обратиться к нему в условии. */
        damage = this.attack;
      } else if (durability === 0) {
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
  
  const arm = new Weapon('Рука', 1, Infinity, 1);
  const bow = new Weapon('Лук', 10, 200, 3);
  const sword = new Weapon('Меч', 25, 500, 1);
  const knife = new Weapon('Нож', 5, 300, 1);
  const staff = new Weapon('Посох', 8, 300, 2);
  const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
  const ax = new Weapon('Секира', 27, 800, sword.range);
  const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);
  
// Задача 2
  
  class Arm extends Weapon {
    constructor(name, attack, durability, range) {
      super(name, attack, durability, range)
      this.name = 'Рука';
      this.attack = 1;
      this.durability = Infinity;
      this.range = 1;
      };
  };
  
  class Bow extends Weapon {
    constructor(name, attack, durability, range) {
      super(name, attack, durability, range)
      this.name = 'Лук';
      this.attack = 10;
      this.durability = 200;
      this.range = 3;
      };
  };
  
  class Sword extends Weapon {
    constructor(name, attack, durability, range) {
      super(name, attack, durability, range)
      this.name = 'Меч';
      this.attack = 25;
      this.durability = 500;
      this.range = 1;
      };
  };
  
  class Knife extends Weapon {
    constructor(name, attack, durability, range) {
      super(name, attack, durability, range)
      this.name = 'Нож';
      this.attack = 5;
      this.durability = 300;
      this.range = 1;
      };
  };
  
  class Staff extends Weapon {
    constructor(name, attack, durability, range) {
      super(name, attack, durability, range)
      this.name = 'Посох';
      this.attack = 8;
      this.durability = 300;
      this.range = 2;
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
  
// Задача 3
  
  class StudentLog {
    constructor (name) {
      this.name = name;
      };
    getName() {
       return this.name;
    };
    addGrade(grade, subject) {
      let count = 0;
      // Не понимаю, как сохранить данные о предмете. Без этого не смогу реализовать следующие методы. В массиве я бы сделала это с помощью цикла. Но тут человек вводит предмет и как-то нужно понять, что за предмет и повторялся ли он ранее. Подскажите, пожалуйста, как. Мне очень интересно решение.
      if (subject) {
        count++;
      };
      if (grade < 1 && grade > 5 && grade === String) {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        count = 0;
      };
      return count;
    };
  };
  
  