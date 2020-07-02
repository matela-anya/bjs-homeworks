// Задача 1
String.prototype.isPalindrome = function() {
  let str = this;
  let result;
  str = str.toLowerCase().replace(/\s/g,'');

  if(str === str.split('').reverse().join('')) {
    result = true;
  } else {
    result = false
  };

  return result;
};

"А роза упала на лапу Азора".isPalindrome();

// Задача 1
function getAnimalSound(animal) {
let animalSound;
let sound = animal.sound;

if (animal === undefined) {
  animalSound = null;
} else {
  let sound = animal.sound;
	animalSound = sound;
};

return animalSound;
};

// Задача 2
function getAverageMark(marks) {
  let summ = 0;
  let roundedAverage;

  if (marks.length === 0) {
    averageMark = 0;
  };

  for (let i = 0; i < marks.length; i++) {
    summ += marks[i];     
  };

  roundedAverage = Math.ceil(summ / marks.length);

  return roundedAverage;
};

// Задача 3
function checkBirthday(birthday) {
  let verdict;
  let now = new Date().getTime();
  let date = new Date(birthday);

  birthday = date.getTime();
  let diff = now - birthday;
  let age = diff / now.getFullYear().getMilliseconds();

  if (age > 18) {
    verdict = true;
  }

  return verdict;
};