'use strict';

var hello = 'Hello';
var world = 'World!';

function say() {
  console.log(hello + ', ' + world);
}

say();

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  console.log(x * y);
};

multiply(2, 2);
multiply(5);

function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var len = args.length;
  return args.reduce(function (prev, curr) {
    var sum = prev + curr;
    return sum;
  }) / len;
}

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));
