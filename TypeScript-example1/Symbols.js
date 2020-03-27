var s = Symbol("First Symbol");
// console.log(typeof s);
// console.log(s.toString());
var s2 = Symbol('test');
var s3 = Symbol('test');
// console.log(s2 === s3)
var s4 = Symbol["for"]('RegSymbol');
var s5 = Symbol["for"]('RegSymbol');
// console.log(s4 === s5)
console.log(Symbol.keyFor(s));
console.log(Symbol.keyFor(s2));
console.log(Symbol.keyFor(s3));
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));
