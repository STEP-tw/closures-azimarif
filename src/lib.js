const makeConstant = function(value){
  return function(args){
    return value;
  }
}

const makeCounterFromN = function(count){
  return function(){
    return count++;
  }
}

const makeCounterFromZero = function(){
  let counter = 0;
  return function(){
    return counter++;
  }
}

const makeDeltaTracker = function(oldValue){
  let old = oldValue;
  let delta = 0;
  let newValue = old +delta;
  return function(deltaValue){
    if(deltaValue == undefined){
        return { old, delta , new :newValue }
    }
    newValue = old + deltaValue; 
    let object =  { old, delta : deltaValue, new : newValue }
    old = newValue;
    return object;
  }
}

const makeFiboGenerator = undefined;

const makeCycler = function(array){
  let index = 0;
  let currentIndex =index;
  let myArray = array.slice();
  let length = myArray.length;
  return function(){
    if(index + 2 > length){
      currentIndex = index;
      index = 0;
      return myArray[currentIndex];
    }
    currentIndex = index;
    index++;
    return myArray[currentIndex];
  }
};

const curry = function(functionPassed, number){
  return function(value1, value2){
    if(value2 == undefined){
      return functionPassed(number, value1);
    }
    return functionPassed(number, value1, value2);
  }

}
const compose = function(function1, function2){
  return function(array1, array2){
    if(array2 == undefined){
      return function1(function2(array1));
    }
    return function1(function2(array1, array2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
