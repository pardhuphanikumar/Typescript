let Iterable = [1, 2, 3];
function createIterator(array) {
    let count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true }:
        }
    }
}
let myIterator = createIterator(Iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
// Iterable{
//     [Symbol.Iterator](): Iterator
// }
// Iterator{
//     next(): IresultObj
// }
// IresultObj{
//     value: any,
//         done: bool
// }