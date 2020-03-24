var shape;
(function (shape) {
    shape[shape["Square"] = 0] = "Square";
    shape[shape["Rectangle"] = 1] = "Rectangle";
    shape[shape["Triangle"] = 2] = "Triangle";
    shape[shape["Circle"] = 3] = "Circle";
})(shape || (shape = {}));
var userShape = shape.Circle;
console.log('default', userShape);
var shape1;
(function (shape1) {
    shape1[shape1["Square"] = 5] = "Square";
    shape1[shape1["Rectangle"] = 6] = "Rectangle";
    shape1[shape1["Triangle"] = 12] = "Triangle";
    shape1[shape1["Circle"] = 13] = "Circle";
})(shape1 || (shape1 = {}));
var userShape1 = shape1.Circle;
console.log('manual with numbers', userShape1);
var shape2;
(function (shape2) {
    shape2["Square"] = "square";
    shape2["Rectangle"] = "rectangle";
    shape2["Triangle"] = "triangle";
    shape2["Circle"] = "cicrle";
})(shape2 || (shape2 = {}));
var userShape2 = shape2.Circle;
console.log('manual with string', userShape2);
function printShape(s) {
    console.log(s);
}
//uncomment to see error
// printShape("square");
printShape(userShape);
