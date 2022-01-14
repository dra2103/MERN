// .map()

const groceries = [ "pear onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map(item => '<li>item</li>'); // this takes in a list of items and returns an array of strings resembling html "list items"
console.log(groceryList);

const values = [1, 2, 3, 4, 5];
const cubes = values.map((val) => val ** 3); 
console.log(cubes);

// map is a function that applies a callback function to each item in an array and returns that new array

// .filter()
const values = [1, 2, 3, 4, 5];
const evens = values.filter((val) => val % 2 === 0); // gets all evens in an array
console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter((item) => item.includes("o")); // gets all groceries with the letter "o" in it
console.log(oFoods);

const values = [1,2,3,4,5];
const oddCubes = values.filter( val => val % 2 !== 0).map( val => val**3);
console.log(oddCubes); // you can chain map and filter together 

// Can do anything we want with call back function as long as it reyurns true or false