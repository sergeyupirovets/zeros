module.exports = function getZerosCount(number) {
  // your implementation
  var counter = 0;
  for (var i = 5; number/i >= 1; i *= 5)
    counter += Math.floor(number/i);
  return counter;
}
