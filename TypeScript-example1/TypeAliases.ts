// alert('hello world1');
// console.log('hellowolrd');


//one way
/////////////


// type Mark = number;
// let result: Mark = 31;
// function printNumber(n: number): void {
//     console.table(n)
// }
// printNumber(result);


//////////////


type Mark = number;
type Grade = string;//fail ,pass,credits,distinctions
type result = Mark | Grade;
type Pair<T> = [T, T];

let point: Pair<number> = [10, 5]
console.log(point);