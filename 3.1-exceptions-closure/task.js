//Задача №1. Форматтер чисел

function parseCount(number) {
  let result = Number.parseInt(number);
  if (result === NaN) {
    throw "Невалидное значение";
  };
  return result;
};

function validateCount(number) {
  try {
    parseCount(number);
  } catch(e) {
    return e;
  };
};

//Задача №2. Треугольник

class Triangle {
  constuctor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  if (a + b < c || a + c < b || c + b < a) {
    throw "Треугольник с такими сторонами не существует";
  };

  getPerimeter() {
    let perimeter = a + b + c;
    return perimeter;
  };

  getArea() {
    let area = Math.sqrt(getPerimeter() / 2);
    return area;
  };
};

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  };
  catch(e) {
    getArea: function() { 
      console.log("Ошибка! Треугольник не существует");
  };
};