const makeConstant = function(value) {
  return function(args) {
    return value;
  }
}

const makeCounterFromN = function(count) {
  return function() {
    return count++;
  }
}

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
}


const makeDeltaTracker = function(value) {
  let deltaObject = {
    old: value,
    delta: 0,
    new: value
  }
  return function(currentDeltaValue) {
    if (currentDeltaValue) {
      deltaObject.old = deltaObject.new;
      deltaObject.delta = currentDeltaValue;
      deltaObject.new = deltaObject.old + currentDeltaValue;
    }
    return deltaObject;
  }
}

const setNumbers = function(firstNumber, secondNumber) {
  if (!secondNumber && !firstNumber) {
    firstNumber = 0;
    secondNumber = 1;
  }
  if (firstNumber && !secondNumber) {
    secondNumber = firstNumber;
    firstNumber = 0;
  }
  return {
    firstNumber, secondNumber
  };
}

const makeFiboGenerator = function(firstNumber, secondNumber) {
  let numbers = setNumbers(firstNumber, secondNumber);
  return function() {
    let fiboNumber = numbers.firstNumber;
    numbers.firstNumber = numbers.secondNumber;
    numbers.secondNumber = numbers.secondNumber + fiboNumber;
    return fiboNumber;
  }
};

const makeCycler = function(inputSource) {
  let index = 0;
  let originalSource = inputSource.slice();
  let length = originalSource.length;
  return function() {
    let value = originalSource[index++];
    if (index == originalSource.length) {
      index = 0;
    }
    return value;
  }
};

const curry = function(functionPassed, number) {
  return function(value1, value2) {
    return functionPassed(number, value1, value2);
  }
}

const compose = function(function1, function2) {
  return function(array1, array2) {
    return function1(function2(array1, array2));
  }
}

exports.makeConstant = makeConstant;
exports.makeCounterFromZero = makeCounterFromZero;
exports.makeCounterFromN = makeCounterFromN;
exports.makeDeltaTracker = makeDeltaTracker;
exports.makeFiboGenerator = makeFiboGenerator;
exports.makeCycler = makeCycler;
exports.curry = curry;
exports.compose = compose;