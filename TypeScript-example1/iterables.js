var Iterable = [1, 2, 3];
function createIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(Iterable);
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
