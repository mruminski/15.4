const hello = 'Hello';
const world = 'World!'

function say() {
  console.log(`${hello}, ${world}`);
}

say();

const multiply = (x = 1 ,y = 1) => { console.log(x * y) };

multiply(2,2);
multiply(5);
