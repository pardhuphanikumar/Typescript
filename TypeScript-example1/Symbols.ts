const s = Symbol("First Symbol");
// console.log(typeof s);
// console.log(s.toString());

const s2 = Symbol('test');
const s3 = Symbol('test');
// console.log(s2 === s3)

let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
// console.log(s4 === s5)

console.log(Symbol.keyFor(s));
console.log(Symbol.keyFor(s2));
console.log(Symbol.keyFor(s3));
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));