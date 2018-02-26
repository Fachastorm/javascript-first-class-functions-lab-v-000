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
