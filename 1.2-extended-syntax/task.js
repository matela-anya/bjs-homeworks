"use strict"
function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let discriminant = b * b - 4 * a * c;
    let x = [];

    if (discriminant === 0) {
          x.push(-b / (2 * a));
          } else if (discriminant > 0) {
            x.push(((-b + Math.sqrt(discriminant)) / (2 * a)), ((-b - Math.sqrt(discriminant)) / (2 * a)));
            };

    return x;
};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;

    if (marks.length === 0) {
        averageMark = 0;
    } else if (marks.length > 4) {
            marks.splice(5, marks.length);
    };

    for (let i = 0; i < marks.length; i++) {
            averageMark += marks[i];
    };

    return averageMark / marks.length;
};

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let fullYear = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (fullYear >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };

    return result;
};