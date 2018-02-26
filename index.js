function countdown(callback) {
  window.setTimeOut(function() {
    callback();
  }, 2000);
}