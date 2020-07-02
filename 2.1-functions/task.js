// Задача 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let object;
    
    if (D < 0) {
        object = { D: D, roots: [] };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        object = { D: D, roots: [ x1 ] };
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        object = { D: D, roots: [ x1, x2 ] }
    };

    return object;
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    
    console.log(`Вычисляем корни квадратного уравнения ${a} * x² + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень ${result.roots[0]} = значение_корня`);
    } else {
        console.log(`Уравнение имеет два корня. ${result.roots[0]} = значение_корня_1, ${result.roots[1]} = значение_корня_2`);
    };

    return result;
};

// Задача 2

function getAverageMark(marks) {
  let sum = marks.reduce(function(sum, current) {
        return (sum + current);
      });
  let average = sum / Object.keys(marks).length;
  return average;
};

function getAverageScore(data) {
  for (let i in data) {
    data[i] = getAverageMark(Object.values(data[i]));
  };
  data.averageAll = getAverageMark(Object.values(data));
  return data;
};  

// Задача 3
function getPersonData(secretData) {
  for (i in secretData) {
    if (i === 'aaa') {
      i = 'firstName';
    } else {
      i = 'lastName';
      };
    getDecodedValue(secretData[i]);
  };
  return console.log({
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  });
};

function getDecodedValue(secret) {
  if (secret === 1) {
    secret = "Эмильо";
    } else {
      secret = "Родриго";
      };
  return secret;
};