var express = require('express');
var router = express.Router();

var fibby = require('../app/fibby');
var getFibonacci = fibby.fibonacci(4000000);
var getEvenNumbers = fibby.evenNumbers(getFibonacci);
var fibbyEvenTotal = fibby.addNumbers(getEvenNumbers);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    getFibonacci: fibbyEvenTotal.toLocaleString()
  });
});

module.exports = router;
