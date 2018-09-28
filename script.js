const hello = 'Hello';
const world = 'World!'

function say() {
  console.log(`${hello}, ${world}`);
}

say();

const multiply = (x = 1, y = 1) => { console.log(x * y) };

multiply(2,2);
multiply(5);

function average(...args) {
  return args.reduce((prev, curr) => (prev + curr))/args.length;
}

console.log(average(1));
console.log(average(1,3));
console.log(average(1,3,6,6));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [, , third , , fifth] = arr;
const firstname = third;
const lastname = fifth;
console.log(firstname);
console.log(lastname);
