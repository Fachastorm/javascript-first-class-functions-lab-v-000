function countdown(callback) {
  window.setTimeOut(function() {
    callback();
  }, 2000);
}


function createMultiplier(multiplierValue) {
  return function(value) {
    return mulitplierValue * value;
  };
}

function multiplier(a, b) {
  return a * b;
}

var double = createMultiplier(2); 
var tripler = createMultiplier(3);