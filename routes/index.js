var express = require('express');
var router = express.Router();

// Setup fib stuff
var fibby = require('../app/fibby');
var getFibonacci = fibby.fibonacci(4000000);
var getEvenNumbers = fibby.evenNumbers(getFibonacci);
var fibbyEvenTotal = fibby.addNumbers(getEvenNumbers);

// Setup coin stuff
var coinsSetup = require('../app/coins');
var changeInput = 1.44;
var returnAmountofChange = coinsSetup.coins(changeInput);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    getFibonacci: fibbyEvenTotal.toLocaleString(),
    getAmountToChange: changeInput,
    getChange: returnAmountofChange
  });
});

module.exports = router;
