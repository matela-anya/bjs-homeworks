function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
      return arr1.every((item, index) => item === arr2[index]);
    } else {
      return false;
    }
}

let memory= [];
function memorize(fn, limit) {
  return function(...args) {

  finded = memory.find(item => compareArrays(item.args, args));
  if (!finded) {
  result1 = fn(...args)
  let newObject = {
      args: args,
      result: result1
      }    
  memory.push(newObject);
  if (memory.count > limit){
     memory.shift();
    }
  return result1;
  }
  else return finded.result;
  }
}