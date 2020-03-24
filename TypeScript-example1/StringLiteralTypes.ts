type Easing = "ease-in" | "ease-out" | "ease-in-out";
//You can pass any of the three allowed strings, but any other string will give the error
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
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
    }
}

let button = new UIElement();
console.log(button);
button.animate(0, 0, "ease-in");
console.log(button);
//uncomment to see error
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here