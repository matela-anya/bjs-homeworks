// Задача 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let object;
    
    if (D < 0) {
        object = { D: D, roots: [] };
    } else if (D === 0) {
        let x1 = -b / 2 * a;
        object = { D: D, roots: [ x1 ] };
    } else {
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
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

function getAverageScore(data) {
    let averageAll = 0;
    let counter = 0;
  
    for (let i in data) {
      counter++;
      let result = data[i].reduce(function(sum, current) {
        return (sum + current);
      });
  
      function getAverageMark(marks) {
        averageAll = (averageAll + result) / counter;
        data.averageAll = averageAll; 
        //Не могу понять, как добавить это свойство в обект.
      };
  
      let average = result / data[i].length;
      data[i] = average;
  
      if (data[i] === 0) {
      averageAll = 0;
      };
    };
  
    return data;
  };

// Задача 3
// Не понимаю, зачем нужна вторая функция и как вернуть и свойство, и значение свойства. С первого взгляда кажется все так просто, но в итоге я запуталась.

function getPersonData(secretData) {
  
    function getDecodedValue(secret) {
      let name;
      for (secret in secretData) {
  
      if (secretData[secret] === 1) {
          name = "Эмильо";
        } else if (secretData[secret] === 0) {
          name = "Родриго";
        };
  
        if (secret === aaa) {
          secret = "firstName";
          } else {
            secret = "lastName";
        };
        
      };
  
      secret = name;
  
      return secret;
    };
  
  return secretData[secret];
  };