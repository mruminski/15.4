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
