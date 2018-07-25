module.exports = {
  // Limits the fibonacci by what's passed in
  fibonacci: function(max) {
    var fibArray = [1,2] // setup the fibonacci array
    var i = 2;

    while (fibArray[i-1] + fibArray[i-2] <= max) {
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
      i++;
    }

    return fibArray;
  },

  evenNumbers: function(numberString) {
    var builtArray = numberString;
    var evenArray = [];

    for (var i = 0; i < builtArray.length; i++) {
      if(builtArray[i] % 2 === 0) {
        evenArray.push(builtArray[i]);
      }
    }

    return evenArray;
  },

  addNumbers: function(numberArray) {
    return numberArray.reduce(function(a, b) {
      return a + b
    });
  }
};
