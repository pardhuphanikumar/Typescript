interface IPizza {
    foodType: 'pizza',
    toppings: string[],
    crust: string
}
interface Isandwich {
    foodType: 'sandwich',
    toppings: string[],
    bread: string,
}
type Food = Isandwich | IPizza
const myFood: Isandwich = {
    bread: 'oeu',
    foodType: 'sandwich',
    toppings: ['qee', 'a']
}
const myFood2: IPizza = {
    crust: 'foo',
    foodType: 'pizza',
    toppings: ['qee', 'a']
}
function eatFood(food: Food) {
    if (food.foodType === 'pizza') {
        console.log(food);
    } else {
        console.log(food);

        food.bread//auto suggest their model instareface
    }
}
eatFood(myFood)