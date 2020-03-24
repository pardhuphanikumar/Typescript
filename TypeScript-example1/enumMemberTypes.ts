enum shape {
    Square,
    Rectangle,
    Triangle,
    Circle
}
let userShape: shape = shape.Circle;
console.log('default', userShape);

enum shape1 {
    Square = 5,
    Rectangle,
    Triangle = 12,
    Circle
}
let userShape1: shape1 = shape1.Circle;
console.log('manual with numbers', userShape1);


enum shape2 {
    Square = "square",
    Rectangle = "rectangle",
    Triangle = "triangle",
    Circle = "cicrle"
}
let userShape2: shape2 = shape2.Circle;
console.log('manual with string', userShape2);



function printShape(s: shape) {
    console.log(s);

}
//uncomment to see error
// printShape("square");
printShape(userShape);