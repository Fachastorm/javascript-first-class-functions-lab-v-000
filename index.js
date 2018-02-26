function countdown(callback) {
  window.setTimeOut(function() {
    callback();
  }, 2000);
}


function createMultiplier(multiplyValue) {
  return function(value) {
    return mulitplyValue * value;
  };
}
