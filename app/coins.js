module.exports = {
  coins: function(amount) {
    amount = amount * 100; // dollar math to remove decimals from the input (prevents from using parseInt l8r)

    // Set the coin values
    var quarter = 25;
    var dime = 10;
    var nickle = 5;
    var penny = 1;

    // Store the coins + a value name
    var coins = [
      ['quarter', quarter],
      ['dime', dime],
      ['nickle', nickle],
      ['penny', penny]
    ];

    // If there are coin multiples, add the correct pluralization
    var pluralizer = function(key, number) {
      if(number > 1) {
        if(key.slice(-1) == 'y') {
          key = key.substring(0, key.length - 1) + 'ies';
        } else {
          key += 's';
        }
      }

      return number + ' ' + key;
    }

    // Store the change in the change array + setup counting variables
    var change = [];
    var currentDenomination = 0;
    var runningTotal = amount;

    // Loop through the coins array and determine the largest demonination of change that can be made, per the input
    for(i = 0; i < coins.length; i++) {
      if(parseInt(runningTotal / coins[i][1]) > 0) {
        currentDenomination = parseInt(runningTotal / coins[i][1]);
        change.push(pluralizer(coins[i][0], currentDenomination));

        runningTotal = runningTotal - (currentDenomination * coins[i][1]);
      }
    }

    return change.join(', ').replace(/,(?=[^,]*$)/, ' and');
  }
}
