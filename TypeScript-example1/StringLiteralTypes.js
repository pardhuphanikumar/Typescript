var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
            console.log('ease-in');
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
console.log(button);
button.animate(0, 0, "ease-in");
console.log(button);
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
