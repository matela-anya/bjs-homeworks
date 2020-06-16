// Не понимаю, куда тут пихать this и как связать console.log в задаче с фунцкцией? Как обычно через return? Какой тут должен быть синтаксис? Искала, ничего подобного не нашла. В лекции ответов нет (либо я очень невнимательна). Подскажите, куда двигаться, пожалуйста.
function String.prototype.isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
  
    if(str === str.split('').reverse().join('')) {
      true;
    } else {
      false;
    };
  };
  
  console.log("А роза упала на лапу Азора");

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