// Object.freeze()
const arr = [1, 2, 3, 4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

// Spread, Concat, and Slice
const groceryList = Object.freeze([
    { item: "carrots", haveIngredient: false },
    { item: "onions", haveIngredient: true },
    { item: "celery", haveIngredient: false },
    { item: "cremini mushrooms", haveIngredient: false },
    { item: "butter", haveIngredient: true },
]);

// Use ...(the Spread to make a copy) and add the object to the array
const needThyme = groceryList.concat([
    { item: "thyme", haveIngredient: false },
]);

// Use slice to modify the specific object in the array
const gotTheThyme = [...needThyme.slice(0, 5), { ...needThyme[5], haveIngredient: true },];
console.log(gotTheThyme);

// this will take an object out of the array
const notNeceCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];
console.log(notNeceCelery);

const sortedGroceries = [...groceryList].sort((a, b) => a.item > b.item ? 1 : -1);
console.log(sortedGroceries);

// Sorting

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort(function(a,b){return a-b}) // (function(a,b){return a-b}) <- this gets around the double digets being read as 1 or 2
console.log(numbers);
// this will return [10, 12, 22, 3, 5, 8 ]




