const hello = 'Hello';
const world = 'World!'

function say() {
  console.log(`${hello}, ${world}`);
}

say();

const multiply = (x = 1 ,y = 1) => { console.log(x * y) };

multiply(2,2);
multiply(5);

function average(...args) {
  const len = args.length;
  return args.reduce((prev, curr) => {
    let sum = prev + curr;
    return sum;
  }) / len;
}

console.log(average(1));
console.log(average(1,3));
console.log(average(1,3,6,6));
