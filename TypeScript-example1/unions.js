var myFood = {
    bread: 'oeu',
    foodType: 'sandwich',
    toppings: ['qee', 'a']
};
var myFood2 = {
    crust: 'foo',
    foodType: 'pizza',
    toppings: ['qee', 'a']
};
function eatFood(food) {
    if (food.foodType === 'pizza') {
        console.log(food);
    }
    else {
        console.log(food);
        food.bread; //auto suggest their model instareface
    }
}
eatFood(myFood);
