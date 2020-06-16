String.prototype.isPalindrome = function(str) {
  let result;
  str = str.toLowerCase().replace(/\s/g,'');

  if(str === str.split('').reverse().join('')) {
    result = true;
  } else {
    result = false
  };

  return result;
};

const a = new String("А роза упала на лапу Азора");
a.isPalindrome(a);

function getAnimalSound(animal) {
  // код для задачи №1 писать здесь. Почему в домашке два задания №1?
let animalSound;
let sound = animal.sound;

if (animal === undefined) {
  animalSound = null;
} else {
  animalSound = sound;
};

return animalSound;
};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
  let average = 0;
  let roundedAverage;

  if (marks.length === 0) {
    averageMark = 0;
  };

  for (let i = 0; i < marks.length; i++) {
    average += marks[i];     
  };

  roundedAverage = Math.ceil(average / marks.length);

  return roundedAverage;
};

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}