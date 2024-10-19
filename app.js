//Exercise 1: Applying Array.prototype.map()
//Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
const numsMultiplied = nums.map((num) => {
    return num * 2;
})
console.log(numsMultiplied)
//------------------------------------------------------------------------------\\
//Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping)
console.log(secondTopping)
// Equivalent in traditional bracket notation:
console.log(pizzaToppings[0])
console.log(pizzaToppings[1])

//------------------------------------------------------------------------------\\
//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
const car = {
    make: 'Audi',
    model: 'q5',
  };
const { make, model } = car;
console.log(make)
console.log(model)
// Equivalent in traditional dot notation:
console.log(car.make)
console.log(car.model)

//------------------------------------------------------------------------------\\
//Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings2];
console.log(controversialPizzaToppings)

//------------------------------------------------------------------------------\\
//Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.
const audiCar = {
    make: 'Audi',
    model: 'q5',
}
const myCar = { ...audiCar}
myCar.model = 'q7';
console.log(audiCar)
console.log(myCar)

//------------------------------------------------------------------------------\\
//Exercise 6: Dynamic keys in objects
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const userProfile = {};
const propertyName = 'username';                        //Variable as a dynamic key
userProfile[propertyName] = 'paul_colton';
console.log(userProfile)

//------------------------------------------------------------------------------\\
//Exercise 7: Import and Export

//------------------------------------------------------------------------------\\
//Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function kittyCats( noun = 'cat', adjective = 'white' ) {
    return `The ${noun} is ${adjective}!`;
} 
console.log(kittyCats('tiger', 'black'))

//------------------------------------------------------------------------------\\




