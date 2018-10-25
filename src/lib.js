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

const makeDeltaTracker = undefined;

const makeFiboGenerator = undefined;

const makeCycler = function(array){
  let index = 0;
  let currentIndex =index;
  myArray = array.slice();
  length = myArray.length;
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
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
